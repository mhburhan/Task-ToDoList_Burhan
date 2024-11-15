import React, { useState } from 'react';

const TodoItems = ({ task, deleteTask, editTask, saveTask }) => {
  const [editText, setEditText] = useState(task.text);

  return (
    <div className="task-item">
      {task.isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="task-buttons">
        {task.isEditing ? (
          <button onClick={() => saveTask(task.id, editText)}>Simpan</button>
        ) : (
          <button onClick={() => editTask(task.id)}>Edit</button>
        )}
        <button onClick={() => deleteTask(task.id)}>Hapus</button>
      </div>
    </div>
  );
};

export default TodoItems;