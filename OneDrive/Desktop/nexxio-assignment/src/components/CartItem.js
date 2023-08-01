import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
  };

  return (
    <li className="cart-item">
      <div>
        <span className="item-name">{item.name}</span> - ${item.price}
      </div>
      <button className="remove-btn" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;


