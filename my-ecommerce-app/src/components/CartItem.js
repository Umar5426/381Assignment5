/*
=========================================================
Name : CartItem.js
Assignment : Assignment 4
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Mar 24, 2024
Description : cart items component for my-ecommerce-app
=========================================================
*/

import React from 'react';
import './Products.css';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div>${item.price.toFixed(2)}</div>
            <div>
                Quantity: {item.quantity}
                <button onClick={() => onIncrease(item)}>+</button>
                <button onClick={() => onDecrease(item)}>-</button>
            </div>
            <div>Total: ${(item.quantity * item.price).toFixed(2)}</div>
            <button onClick={() => onRemove(item)}>Remove</button>
        </div>
    );
};

export default CartItem;