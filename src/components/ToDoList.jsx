import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, handleComplete, handleDelete, handleEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onComplete={() => handleComplete(task.id)}
          onDelete={() => handleDelete(task.id)}
          onEdit={() => handleEdit(task.id)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
