export default Task = (newName, newPriority, dueDate) => {
    this.name = newName;
    this.priority = newPriority;
    this.due = dueDate;

    return { get getTaskData() {
        return { name, priority, due};
    }};
};