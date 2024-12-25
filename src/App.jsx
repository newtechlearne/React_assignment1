import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {

// State to store tasks with an initial empty array
  const [tasks, setTasks] = useState([]);
  

// State to store new task text with an initial empty string to allow user input
  const [newTask, setNewTask] = useState("");

  // Function to add new task
  const addTask = () => {
    // Check if new task text is not empty
    if (newTask.trim() === "") return;
    
    // Add new task to tasks state
  
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    
    // Reset new task text
    setNewTask("");
  };

  // Function to complete task
  const completeTask = (id) => {
    // Update tasks state by toggling completed status of task with given id
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Function to delete task
  const deleteTask = (id) => {
    // Update tasks state by filtering out task with given id
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to edit task
  const editTask = (id) => {
    // Prompt user to enter new task text
    const taskText = prompt("Edit task:");
    
    // If user enters new task text, update tasks state
    if (taskText) {
      setTasks(tasks.map(task => task.id === id ? { ...task, text: taskText } : task));
    }
  };

  return (
    // Main app container
    <div className="app">
      {/* Header component */}
      <Header />
      
      {/* Task input container */}
      <div className="task-input">
        {/* Input field for new task text */}
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        
        {/* Button to add new task */}
        <button onClick={addTask}>Add</button>
      </div>
      
      {/* ToDoList component with tasks and event handlers, props */}
     
      <ToDoList
        tasks={tasks}
        handleComplete={completeTask}
        handleDelete={deleteTask}
        handleEdit={editTask}
      />
    </div>
  );
};

export default App;