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
    <li className="task-item">
      <span
        className={task.completed ? 'task-text completed' : 'task-text'}
        onClick={handleToggle}
      >
        {task.title}
      </span>
      <button className="toggle-btn" onClick={handleToggle}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button className="remove-btn" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
};

export default TaskItem;

