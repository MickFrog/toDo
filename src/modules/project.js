import Task from "./task.js";

const Project = (newName) => {
    let name = newName;
    let tasks = [];
    let newTask_ID = 0;

    const createTask = (taskName, taskPriority, taskDue) => {
        let newTask = Task(taskName, taskPriority, taskDue);
        newTask_ID++;
        newTask.id = 'E' + newTask_ID;

        tasks.push(newTask);
        return newTask;
    };

    const removeTask = (Taskid) => {
        tasks = tasks.filter(T => T.id != Taskid);
    };

    return {name, createTask, removeTask, 
        get tasks() { return tasks; },
        get newTask_ID() { return newTask_ID; },

        set tasks(newT) { tasks = newT; }, 
        set newTask_ID(start) { newTask_ID = start; }, 
        
    };
}

export default Project;