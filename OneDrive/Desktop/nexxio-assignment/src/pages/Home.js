// import React from 'react';
// import '../styles/Home.css';

// const Home = () => {
//   const shoppingItems = [
//     { id: 1, name: 'Item 1', price: 10, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' },
//     { id: 2, name: 'Item 2', price: 20, image: 'https://m.media-amazon.com/images/I/8199oh8PugS._AC_UY350_.jpg' },
//     { id: 3, name: 'Item 3', price: 15, image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400' },
//     { id: 4, name: 'Item 4', price: 25, image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/a/tr:w-300,/4afbcecRLO1254_1.jpg' },
//   ];

//   return (
//     <div className="home">
//       <h2>Welcome to the To-Do List and Shopping Cart App!</h2>
//       <p>This is the home page</p>

//       <h3>Example Shopping Items:</h3>
//       <ul className="shopping-items">
//         {shoppingItems.map((item) => (
//           <li key={item.id} className="shopping-item">
//             <img src={item.image} alt={item.name} />
//             <div className="item-details">
//               <span className="item-name">{item.name}</span>
//               <span className="item-price">${item.price}</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Home;

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
