const Task = (newName, newPriority, dueDate) => {
    let id = '';
    let name = newName;
    let priority = newPriority;
    let due = dueDate;
    let finished = false;

    return { get getTaskData() {
        return { name, priority, due, finished};
    }, id};
};

export default Task;