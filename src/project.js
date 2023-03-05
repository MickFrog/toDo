import Task from "./task.js";

const Project = (newName) => {
    let name = newName;
    let tasks = [];

    const createTask = (taskName, taskPriority, taskDue) => {
        let newTask = Task(taskName, taskPriority, taskDue);

        tasks.push(newTask);
    };

    const getUnfinishedTasks = () => {
        let notDone = 0;

        //Write code here
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].getTaskData().finished == false) {
                notDone++;
            }
        }

        return notDone;
    }

    return {name, createTask, getUnfinishedTasks, tasks};
}

export default Project;