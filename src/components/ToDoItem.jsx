const ToDoItem = ({ task, onDelete, onComplete, onEdit }) => {
  // Render a ToDoItem component with task details and action buttons
  return (
    // Use a div with a dynamic class name to indicate task completion
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      {/* Display the task text */}
      <span>{task.text}</span>
      {/* Button to mark task as complete */}
      <button onClick={onComplete}>Complete</button>
      {/* Button to edit task details */}
      <button onClick={onEdit}>Edit</button>
      {/* Button to delete task */}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

// Export the ToDoItem component as the default export
export default ToDoItem;