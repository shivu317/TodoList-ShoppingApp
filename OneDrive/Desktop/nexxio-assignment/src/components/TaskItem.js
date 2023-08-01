
import React from 'react';
import { useTodo } from '../contexts/TodoContext';
import '../styles/TaskItem.css';

const TaskItem = ({ task }) => {
  const { dispatch } = useTodo();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  };

  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.title}
      </span>
      <button onClick={handleToggle}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
