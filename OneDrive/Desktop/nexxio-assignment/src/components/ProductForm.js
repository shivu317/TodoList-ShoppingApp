

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const ProductForm = () => {
  const [newProduct, setNewProduct] = useState('');
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    
    dispatch({ type: 'ADD_TO_CART', payload: newProduct });
    setNewProduct('');
  };

  return (
    <div>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Product Name"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductForm;

