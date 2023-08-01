

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Replace 'API_URL' with the actual URL of your shopping items API
  const API_URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log('API Response:', response.data);
        // Assuming the API response is an array of shopping items
        setShoppingItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching shopping items:', error);
      });
  }, []);

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      // If the item is already in the cart, increase its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h2>Welcome to the To-Do List and Shopping Cart App!</h2>
      <p>This is the home page</p>

      <h3>Example Shopping Items:</h3>
      {shoppingItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
          <div>
            {item.title} - ${item.price}
          </div>
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}

      <h3>Cart Items:</h3>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
