import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import TaskItem from './TaskItem';
import '../styles/TodoList.css';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const { state, dispatch } = useTodo();
  const { todos } = state;

  const handleAddTask = () => {
    const newTaskItem = {
      id: new Date().getTime(),
      title: newTask,
      completed: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTaskItem });
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const handleUpdateTask = (id, title) => {
    const updatedTaskItem = {
      id,
      title,
    };
    dispatch({ type: 'UPDATE_TODO', payload: updatedTaskItem });
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add Task"
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoList;
