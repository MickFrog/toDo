import Task from "./task.js";

const Project = (newName) => {
    let name = newName;
    let tasks = [];
    let newTask_ID = 0;

    const createTask = (taskName, taskPriority, taskDue) => {
        let newTask = Task(taskName, taskPriority, taskDue);
        newTask_ID++;
        newTask.id = 'E' + (newTask_ID);

        tasks.push(newTask);
        return newTask;
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