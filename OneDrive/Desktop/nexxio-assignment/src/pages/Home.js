import React from 'react';

const Home = () => {
  const shoppingItems = [
    { id: 1, name: 'Item 1', price: 10, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' },
    { id: 2, name: 'Item 2', price: 20, image: 'https://m.media-amazon.com/images/I/8199oh8PugS._AC_UY350_.jpg' },
    { id: 3, name: 'Item 3', price: 15, image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, name: 'Item 4', price: 25, image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/a/tr:w-300,/4afbcecRLO1254_1.jpg' },
  ];

  return (
    <div>
      <h2>Welcome to the To-Do List and Shopping Cart App!</h2>
      <p>This is the home page</p>

      <h3>Example Shopping Items:</h3>
      <ul>
        {shoppingItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <div>
              {item.name} - ${item.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
