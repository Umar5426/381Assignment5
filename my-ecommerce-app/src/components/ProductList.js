/*
=========================================================
Name : ProductList.js
Assignment : Assignment 5
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : April 2, 2024
Description : product list for my-ecommerce-app
=========================================================
*/

import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './Products.css';

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')     // fetch from backend
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error("Failed to fetch products:", error);
            });
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;


