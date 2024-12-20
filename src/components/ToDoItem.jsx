const ToDoItem = ({ task, onDelete, onComplete, onEdit }) => {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <button onClick={onComplete}>Complete</button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ToDoItem;

  