import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TodoList from './components/TodoList';
import ShoppingCart from './components/ShoppingCart';
import WeatherWidget from './components/WeatherWidget';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/todo">To-Do List</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
          <li>
            <Link to="/weather">Weather Widget</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoProvider><TodoList /></TodoProvider>} />
        <Route path="/cart" element={<CartProvider><ShoppingCart /></CartProvider>} />
        <Route path="/weather" element={<WeatherWidget />} />
      </Routes>
    </div>
  );
}

export default App;
