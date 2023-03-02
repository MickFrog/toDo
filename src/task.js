const Task = (newName, newPriority, dueDate) => {
    let name = newName;
    let priority = newPriority;
    let due = dueDate;
    let finished = false;

    return { get getTaskData() {
        return { name, priority, due, finished};
    }};
};

export default Task;