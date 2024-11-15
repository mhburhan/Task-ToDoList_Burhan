import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Item 1', isEditing: false },
    { id: 2, text: 'Item 2', isEditing: false },
    { id: 3, text: 'Item 3', isEditing: false },
    { id: 4, text: 'Item 4', isEditing: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, isEditing: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const saveTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  return (
    <div className="app">
      <div className="task-input">
        <input
          type="text"
          placeholder="Tambah tugas baru"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Tambah Tugas</button>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} saveTask={saveTask} />
    </div>
  );
}

export default App;
