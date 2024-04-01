/*
=========================================================
Name : Cart.js
Assignment : Assignment 4
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Mar 24, 2024
Description : cart component for my-ecommerce-app
=========================================================
*/


import React from 'react';
import CartItem from './CartItem';
import './Products.css';

const Cart = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <div className="cart-title">Shopping Cart</div>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onAddToCart}
                    onDecrease={onRemoveFromCart}
                    onRemove={() => onRemoveFromCart(item, true)}
                />
            ))}
            <div>Total Cost: ${totalPrice.toFixed(2)}</div>
        </div>
    );
};

export default Cart;