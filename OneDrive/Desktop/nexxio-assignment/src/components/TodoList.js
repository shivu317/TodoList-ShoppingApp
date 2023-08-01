import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const { state, dispatch } = useTodo();
  const { todos } = state;

  const handleAddTodo = () => {
    const newTodoItem = {
      id: new Date().getTime(), // Generate a unique ID, you can use a library like uuid
      text: newTodo,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodoItem });
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleUpdateTodo = (id, text) => {
    const updatedTodoItem = {
      id,
      text,
    };
    dispatch({ type: 'UPDATE_TODO', payload: updatedTodoItem });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleUpdateTodo(todo.id, 'Updated Text')}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;

