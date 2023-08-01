import React, { createContext, useReducer, useContext } from 'react';

// Define the initial state for the todo list
const initialState = {
  todos: [],
};

// Define the todo reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    default:
      return state;
  }
};

// Create the TodoContext
const TodoContext = createContext();

// Create the TodoProvider component
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Create a custom hook to use the TodoContext
const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
