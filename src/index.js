import "./style.css";
import { compareAsc, lastDayOfWeek, format } from "date-fns";
import serializeJavascript from "serialize-javascript";
import Project from "./modules/project.js";

let activeProject = null;
let allProjects = [];

const Utility = (() => {
  const isLocalStorageAvailable = () => {
    let test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  const deserialize = (serJs) => {
    return eval("(" + serJs + ")");
  };

  const updateLocal_Storage = () => {
    if (!isLocalStorageAvailable()) return;
    localStorage.setItem("allProjects", serializeJavascript(allProjects));
  };

  return { deserialize, updateLocal_Storage };
})();

const projectBusiness = (projectObj = null) => {
  const projectsComp = document.querySelector(".projectsList");
  const taskHandler = taskBusiness();
  const temp_taskView = taskHandler.taskView;
  const addTaskBtn = document.getElementById("addTask-Btn");

  let newProjectObj = projectObj;

  const addProject = (pjctName) => {
    //Internal implementation
    newProjectObj = Project(pjctName);
    allProjects.push(newProjectObj);
    Utility.updateLocal_Storage();

    //Visual implementation
    let newPjct = displayProject();
    return newPjct;
  };

  const addOldProject = () => {
    allProjects.push(newProjectObj);
    Utility.updateLocal_Storage();

    let newPjct = displayProject();
    return newPjct;
  };

  const displayProject = () => {
    let projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.textContent = newProjectObj.name;
    projectDiv.appendChild(addDeleteBtn());
    activateListener(projectDiv);

    projectsComp.appendChild(projectDiv);
    return projectDiv;
  };

  const addDeleteBtn = () => {
    let btn = document.createElement("button");
    btn.id = "deletePjct";

    btn.addEventListener("click", () => {
      projectsComp.removeChild(btn.parentElement);
      activeProject.tasks.length = 0; //clear tasks
      allProjects = allProjects.filter((P) => P != activeProject);
      activeProject = null;
      Utility.updateLocal_Storage();

      while (temp_taskView.firstElementChild) {
        //clear TaskView
        temp_taskView.removeChild(temp_taskView.firstElementChild);
      }

      addTaskBtn.style.display = "none"; //remove add task btn
    });

    return btn;
  };

  const activateListener = (pjct) => {
    pjct.addEventListener("click", (event) => {
      activeProject = newProjectObj;
      if (event.target.id == "deletePjct") return; //prevent call when delete btn clicked

      for (let i = 0; i < projectsComp.children.length; i++) {
        //remove active status of other pjcts
        [...projectsComp.children][i].classList.remove("active");
      }
      //remove active status from week and today tabs
      domBusiness.todayTasks.classList.remove("active");
      domBusiness.weekTasks.classList.remove("active");

      pjct.classList.add("active");

      DisplayTasks(activeProject.tasks); //Code to display tasks
    });
  };

  const DisplayTasks = (P_Tasks) => {
    //clear TaskView
    while (temp_taskView.firstElementChild) {
      temp_taskView.removeChild(temp_taskView.firstElementChild);
    }

    for (let i = 0; i < P_Tasks.length; i++) {
      //Display the tasks
      taskHandler.displayTask(P_Tasks[i]);
    }

    domBusiness.taskAddBtn.style.display = "flex"; //Display the add-task btn
  };

  return { addProject, addOldProject, newProjectObj, displayProject };
};

const taskBusiness = () => {
  const taskView = document.querySelector(".taskViewer");
  const dateInputElement = document.getElementById("taskDue");

  // Add minimum attribute to date input tp prevent past dates
  const formattedDate = new Date().toISOString().split("T")[0];
  dateInputElement.setAttribute("min", formattedDate);

  const addTask = (newName, newPriority, newDue) => {
    //Internal implementation
    if (compareAsc(newDue, new Date()) == -1) {
      //prevent past dates
      let d = new Date();
      newDue = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }
    newDue = new Date(
      newDue.getFullYear(),
      newDue.getMonth(),
      newDue.getDate()
    );

    let newBorn_Task = activeProject.createTask(newName, newPriority, newDue);
    Utility.updateLocal_Storage();

    displayTask(newBorn_Task); //Visual implementation
  };

  const displayTask = (taskObj) => {
    let newTaskDiv = document.createElement("div");
    newTaskDiv.className = "task";

    newTaskDiv.appendChild(addText(taskObj.getTaskData.name));
    newTaskDiv.appendChild(
      addText(format(taskObj.getTaskData.due, "yyyy-MM-dd"))
    );

    newTaskDiv.appendChild(addTaskDeleteBtn());
    urgentBg(newTaskDiv, taskObj.getTaskData.priority);

    newTaskDiv.setAttribute("T_id", taskObj.id); //custom id attribute on each task div

    taskView.appendChild(newTaskDiv);
  };

  const addText = (newText) => {
    let newPara = document.createElement("p");
    newPara.textContent = newText;

    return newPara;
  };

  const urgentBg = (elem, elemPriority) => {
    if (elemPriority == "urgent") {
      //add urgency bg
      elem.style.backgroundColor = "#E5C2C0";
    }
  };

  const addTaskDeleteBtn = () => {
    let btn = document.createElement("button");
    btn.id = "deleteTask";
    btn.innerHTML = '<img src="./images/delete.svg" alt="deleteBtn">';

    btn.addEventListener("click", () => {
      //edit activeProject tasks array to remove deleted task
      activeProject.removeTask(btn.parentElement.getAttribute("T_id"));
      Utility.updateLocal_Storage();

      taskView.removeChild(btn.parentElement);
    });

    return btn;
  };

  return { addTask, displayTask, taskView, addText, urgentBg };
};

const formBusiness = (() => {
  const projectForm = document.getElementById("projectBox");
  const taskForm = document.getElementById("taskBox");
  const overlay = document.querySelector(".overlay");

  projectForm.onsubmit = (event) => {
    //add project and remove form display
    event.preventDefault();
    let ProjectController = projectBusiness();
    ProjectController.addProject(projectForm.elements[0].value);
    overlay.style.display = "none";
    projectForm.style.display = "none";
    projectForm.reset();
  };

  taskForm.onsubmit = (event) => {
    //add task and remove form display
    event.preventDefault();
    let TaskController = taskBusiness();

    TaskController.addTask(
      taskForm["newTask"].value,
      taskForm["priority"].value,
      new Date(taskForm["taskDue"].valueAsDate)
    );

    overlay.style.display = "none";
    taskForm.style.display = "none";
    taskForm.reset();
  };

  projectForm.elements["cancelPjt"].addEventListener("click", () => {
    //remove forms on cancel btn click
    overlay.style.display = "none";
    projectForm.style.display = "none";
  });

  taskForm.elements["cancelTask"].addEventListener("click", () => {
    overlay.style.display = "none";
    taskForm.style.display = "none";
  });

  return { projectForm, taskForm, overlay };
})();

const domBusiness = (() => {
  const projectAddBtn = document.getElementById("addPjct-Btn");
  const taskAddBtn = document.getElementById("addTask-Btn");
  const todayTasks = document.getElementById("todayTasks");
  const weekTasks = document.getElementById("weekTasks");
  const projectsTab = document.querySelector(".projectsList");
  const taskV = taskBusiness();

  let tempDate = new Date(); //variable

  //Event Listeners
  projectAddBtn.addEventListener("click", () => {
    //display project form
    formBusiness.overlay.style.display = "flex";
    formBusiness.projectForm.style.display = "flex";
  });

  taskAddBtn.addEventListener("click", () => {
    //display task form
    formBusiness.overlay.style.display = "flex";
    formBusiness.taskForm.style.display = "flex";
  });

  todayTasks.addEventListener("click", () => {
    setUpView(todayTasks);
    weekTasks.classList.remove("active");

    for (let i = 0; i < allProjects.length; i++) {
      for (let j = 0; j < allProjects[i].tasks.length; j++) {
        if (
          compareAsc(
            allProjects[i].tasks[j].getTaskData.due,
            new Date(
              tempDate.getFullYear(),
              tempDate.getMonth(),
              tempDate.getDate()
            )
          ) == 0
        ) {
          displayGottenTasks(allProjects[i].name, allProjects[i].tasks[j]);
        }
      }
    }
  });

  weekTasks.addEventListener("click", () => {
    setUpView(weekTasks);
    todayTasks.classList.remove("active");

    for (let i = 0; i < allProjects.length; i++) {
      for (let j = 0; j < allProjects[i].tasks.length; j++) {
        if (
          compareAsc(
            allProjects[i].tasks[j].getTaskData.due,
            lastDayOfWeek(tempDate)
          ) != 1
        ) {
          displayGottenTasks(allProjects[i].name, allProjects[i].tasks[j]);
        }
      }
    }
  });

  const setUpView = (component) => {
    document.getElementById("addTask-Btn").style.display = "none";
    for (let i = 0; i < projectsTab.children.length; i++) {
      //remove active status of other pjcts
      [...projectsTab.children][i].classList.remove("active");
    }
    component.classList.add("active");

    while (taskV.taskView.firstElementChild) {
      //clear TaskView
      taskV.taskView.removeChild(taskV.taskView.firstElementChild);
    }
  };

  const displayGottenTasks = (projectName, tObj) => {
    let newTaskDiv = document.createElement("div");
    newTaskDiv.className = "task";

    newTaskDiv.appendChild(
      taskV.addText(tObj.getTaskData.name + " (" + projectName + ")")
    );

    taskV.urgentBg(newTaskDiv, tObj.getTaskData.priority);

    taskV.taskView.appendChild(newTaskDiv);
  };

  return { taskAddBtn, todayTasks, weekTasks };
})();

const pageLoad = (() => {
  // load startup content
  if (localStorage.getItem("allProjects")) {
    //load previous projects if existent
    let restoredProjects = Utility.deserialize(
      localStorage.getItem("allProjects")
    );

    if (restoredProjects.length != 0) {
      let lastProject;
      for (let i = 0; i < restoredProjects.length; i++) {
        //restore each old project, reset its tasks, and taskID num
        let tempProject = Project(restoredProjects[i].name);
        tempProject.tasks = restoredProjects[i].tasks;
        tempProject.newTask_ID = restoredProjects[i].newTask_ID;

        let restored_Project = projectBusiness(tempProject);
        lastProject = restored_Project.addOldProject();
      }
      lastProject.dispatchEvent(new Event("click"));
      return;
    }
  }

  let projectLoad = projectBusiness();
  projectLoad.addProject("Default").dispatchEvent(new Event("click"));

  let taskLoad = taskBusiness();
  taskLoad.addTask("Code all night", "normal", new Date());
})();
