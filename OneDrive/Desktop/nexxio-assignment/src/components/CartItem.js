
import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.id });
  };

  return (
    <li>
      {item.name} - ${item.price}
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default CartItem;
