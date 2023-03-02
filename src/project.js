import Task from "./task.js";

export default Project = (newName) => {
    this.name = newName;
    this.tasks = [];

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

    return {name, createTask, getUnfinishedTasks};
}