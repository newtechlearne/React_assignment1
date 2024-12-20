import ToDoItem from './ToDoItem';

/**
  ToDoList component that displays a list of ToDoItem components.
  **/
const ToDoList = ({ tasks, handleComplete, handleDelete, handleEdit }) => {
  return (
    // Container div for the ToDoList component
    <div>
      {/**
       * Map over the tasks array and render a ToDoItem component for each task.
       * The key prop is set to the task's id to help React keep track of the components.
       */}
      {tasks.map((task) => (
        <ToDoItem
          // Unique key for the ToDoItem component
          key={task.id}
          // Task object to be passed to the ToDoItem component
          task={task}
          // Function to handle task completion
          onComplete={() => handleComplete(task.id)}
          // Function to handle task deletion
          onDelete={() => handleDelete(task.id)}
          // Function to handle task editing
          onEdit={() => handleEdit(task.id)}
        />
      ))}
    </div>
  );
};

export default ToDoList;