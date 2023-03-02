const Task = (newName, newPriority, dueDate) => {
    this.name = newName;
    this.priority = newPriority;
    this.due = dueDate;
    this.finished = false;

    return { get getTaskData() {
        return { name, priority, due, finished};
    }};
};

export default Task;