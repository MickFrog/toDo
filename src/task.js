const Task = (newName, newPriority, dueDate) => {
    let id = '';
    let name = newName;
    let priority = newPriority;
    let due = dueDate;

    return { get getTaskData() {
        return { name, priority, due,};
    }, id};
};

export default Task;