import "./style.css";
import Project from "./project.js";

const projectBusiness = () => {
    //Variables
    const projectsComp = document.querySelector('.projectsList');

    //Fucntions
    const addProject = (pjctName) => {
        //Internal implementation
        //....Write some code here
        let newProjectObj = Project(pjctName);

        //Visual implementation
        let newPjct = document.createElement('div');
        newPjct.className = 'project';
        newPjct.textContent = pjctName;
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
            for (let i = 0; i < projectsComp.children.length; i++) { //remove active status of other pjcts
                [...projectsComp.children][i].classList.remove('active');
            }

            pjct.classList.add('active');

            //Code to display tasks
        });
    }

    return {addProject}
}

const taskBusiness = () => {
    const taskView = document.querySelector('taskViewer');

    const addTask = () => {
        //Internal implementation

        //Visual implementation
    }
}

const formBusiness = (() => {
    const projectForm = document.getElementById('projectBox');
    const taskForm = document.getElementById('taskBox');
    const overlay = document.querySelector('.overlay');

    let ProjectController = projectBusiness();

    projectForm.onsubmit = (event) => {
        event.preventDefault();
        ProjectController.addProject(projectForm.elements[0].value);
        overlay.style.display = 'none';
        projectForm.style.display = 'none';
        projectForm.elements[0].value = ''; //empty name field
    };

    projectForm.elements['cancelPjt'].addEventListener('click', () => {
        overlay.style.display = 'none';
        projectForm.style.display = 'none';
    });

    taskForm.elements['cancelTask'].addEventListener('click', () => {
        overlay.style.display = 'none';
        projectForm.style.display = 'none';
    });
})();

const domBusiness = (() => {
    const projectAddBtn = document.getElementById('addPjct-Btn');
    const taskAddBtn = document.getElementById('addTask-Btn')
    const overlay = document.querySelector('.overlay');
    //forms
    const projectForm = document.getElementById('projectBox');
    const taskForm = document.getElementById('taskBox');

    //Event Listeners
    projectAddBtn.addEventListener('click', () => {
        //display project form
        overlay.style.display = 'flex';
        projectForm.style.display = 'flex';
    });

    taskAddBtn.addEventListener('click', () => {
        //display project form
        overlay.style.display = 'flex';
        taskForm.style.display = 'flex';
    });
})();