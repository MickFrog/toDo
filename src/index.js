import "./style.css";
import { compareAsc, format } from 'date-fns';
import Project from "./project.js";
import Task from "./task";

let activeProject = null;

const projectBusiness = () => {
    //Variables
    const projectsComp = document.querySelector('.projectsList');
    let newProjectObj = null;

    //Functions
    const addProject = (pjctName) => {
        //Internal implementation
        //....Write some code here
        newProjectObj = Project(pjctName);

        //Visual implementation
        let newPjct = document.createElement('div');
        newPjct.className = 'project';
        newPjct.textContent = newProjectObj.name;
        newPjct.appendChild(addDeleteBtn());
        activateListener(newPjct);

        projectsComp.appendChild(newPjct);
    }

    const addDeleteBtn = () => {
        let btn = document.createElement('button');
        btn.id = 'deletePjct';

        btn.addEventListener('click', () => {
            projectsComp.removeChild(btn.parentElement);
        });

        return btn;
    }

    const activateListener = (pjct) => {
        pjct.addEventListener('click', () => {
            activeProject = newProjectObj;
            console.log(activeProject);
            for (let i = 0; i < projectsComp.children.length; i++) { //remove active status of other pjcts
                [...projectsComp.children][i].classList.remove('active');
            }

            pjct.classList.add('active');

            //Code to display tasks
        });
    }

    return {addProject, newProjectObj}
}

const taskBusiness = () => {
    const taskView = document.querySelector('.taskViewer');

    const addTask = (newName, newPriority, newDue) => {
        //Internal implementation
        let newTaskObj = Task(newName, newPriority, newDue);

        //Visual implementation
        let newTaskDiv = document.createElement('div');
        newTaskDiv.className = 'task';

        let inputElem = document.createElement('input');
        inputElem.type = 'checkbox';
        addCheckedTask(inputElem);
        newTaskDiv.appendChild(inputElem);

        newTaskDiv.appendChild(addText(newName));
        newTaskDiv.appendChild(addText(newDue));

        newTaskDiv.appendChild(addTaskDeleteBtn());
        urgentBg(newTaskDiv, newPriority);

        taskView.appendChild(newTaskDiv);
    }

    const addCheckedTask = (checkElement) => {
        checkElement.addEventListener('change', (event) => {
            if (event.target.checked == true) {
                checkElement.nextSibling.innerHTML = '<del>' + checkElement.nextSibling.textContent + '</del>';
                checkElement.nextSibling.nextSibling.innerHTML = '<del>' + checkElement.nextSibling.nextSibling.textContent + '</del>';
            } else {
                checkElement.nextSibling.innerHTML = checkElement.nextSibling.textContent;
                checkElement.nextSibling.nextSibling.innerHTML = checkElement.nextSibling.nextSibling.textContent;
            }
        })
    }

    const addText = (newText) => {
        let newPara = document.createElement('p');
        newPara.textContent = newText;

        return newPara
    }

    const urgentBg = (elem, elemPriority) => {
        if (elemPriority == 'urgent') {
            elem.style.backgroundColor = 'crimson';
            return;
        }
    }

    const addTaskDeleteBtn = () => {
        let btn = document.createElement('button');
        btn.id = 'deleteTask';
        btn.innerHTML = '<img src="../src/images/delete.svg" alt="deleteBtn">';

        btn.addEventListener('click', () => {
            taskView.removeChild(btn.parentElement);
        });

        return btn;
    }

    return {addTask};
}

const formBusiness = (() => {
    const projectForm = document.getElementById('projectBox');
    const taskForm = document.getElementById('taskBox');
    const overlay = document.querySelector('.overlay');

    projectForm.onsubmit = (event) => {
        event.preventDefault();
        let ProjectController = projectBusiness();
        ProjectController.addProject(projectForm.elements[0].value);
        overlay.style.display = 'none';
        projectForm.style.display = 'none';
        projectForm.reset(); //empty form
    };
    
    taskForm.onsubmit = (event) => {
        event.preventDefault();
        let TaskController = taskBusiness();
        TaskController.addTask(taskForm['newTask'].value, taskForm['priority'].value, format(new Date(taskForm['taskDue'].valueAsDate), 'yyyy-MM-dd')) ;
        overlay.style.display = 'none';
        taskForm.style.display = 'none';
        taskForm.reset(); //empty form
    };

    projectForm.elements['cancelPjt'].addEventListener('click', () => {
        overlay.style.display = 'none';
        projectForm.style.display = 'none';
    });

    taskForm.elements['cancelTask'].addEventListener('click', () => {
        overlay.style.display = 'none';
        projectForm.style.display = 'none';
    });

    return {projectForm, taskForm, overlay,};
})();

const domBusiness = (() => {
    const projectAddBtn = document.getElementById('addPjct-Btn');
    const taskAddBtn = document.getElementById('addTask-Btn')

    //Event Listeners
    projectAddBtn.addEventListener('click', () => {
        //display project form
        formBusiness.overlay.style.display = 'flex';
        formBusiness.projectForm.style.display = 'flex';
    });

    taskAddBtn.addEventListener('click', () => {
        //display task form
        formBusiness.overlay.style.display = 'flex';
        formBusiness.taskForm.style.display = 'flex';
    });
})();

const pageLoad = (() => {
    let projectLoad = projectBusiness();
    projectLoad.addProject('Default');
    
    let taskLoad = taskBusiness();
    taskLoad.addTask('Code all night', 'normal', format(new Date(Date()), 'yyyy-MM-dd') );
})();