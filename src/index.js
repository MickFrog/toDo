import "./style.css";
import Project from "./project.js";

const projectBusiness = () => {
    //Variables
    this.projectsComp = document.querySelector('.projectsList');

    //Fucntions
    const addProject = (pjctName) => {
        //Internal implementation
        //....Write some code here
        let newProjectObj = Project(pjctName);

        //Visual implementation
        let newPjct = document.createElement('div');
        newPjct.className = 'project';
        newPjct.textContent = pjctName + ' (' + newProjectObj.getUnfinishedTasks() + ')';
        activateListener(newPjct);

        projectsComp.appendChild(newPjct);
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

