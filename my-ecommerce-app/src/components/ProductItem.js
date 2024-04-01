/*
=========================================================
Name : ProductItem.js
Assignment : Assignment 4
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Mar 24, 2024
Description : prdocut items component for my-ecommerce-app
=========================================================
*/

import React, { useState } from 'react';
import './Products.css';

const ProductItem = ({ product, onAddToCart }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <div onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
                {product.name}
            </div>
            {showDescription && <div>{product.description}</div>}
            <div>${product.price.toFixed(2)}</div>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;