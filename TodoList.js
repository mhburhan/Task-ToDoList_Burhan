import React from 'react';
import TodoItems from './TodoItems';

const TodoList = ({ tasks, deleteTask, editTask, saveTask }) => {
  return (
    <div className="task-list">
      <h3>Daftar Tugas</h3>
      {tasks.map((task) => (
        <TodoItems
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          saveTask={saveTask}
        />
      ))}
    </div>
  );
};

export default TodoList;