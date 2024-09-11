import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './redux/cartSlice'; 
import './cart.css';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(clearCart()); 

  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.card_img} alt={item.about} className="cart-item-img" />
              <div>
                <h3>{item.about}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: {total}</h3>
          
          <form onSubmit={handleOrder} className="order-form">
            <input
              type="text"
              placeholder="Name"
              
              required
            />
            <input
              type="text"
              placeholder="Address"
              
              required
            />
            <button type="submit" className="order-button">Order</button>
           
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
