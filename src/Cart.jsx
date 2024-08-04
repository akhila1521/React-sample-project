import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Update quantity if item already exists
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  // Function to update quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div className='container text-center'>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className='style-type-none'>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)} className='btn btn-danger'> Remove</button>
              <input
                type="number"
                min="1"
                className='form-control w-25'
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </li>
          ))}
        </ul>
      )}
      {/* Add button to add items to the cart */}
      <button onClick={() => addToCart({ id: 1, name: 'Product 1' })} className='btn btn-primary'>
        Add Product 1
      </button>
      {/* ...other product buttons */}
    </div>
  );
}

export default Cart;
