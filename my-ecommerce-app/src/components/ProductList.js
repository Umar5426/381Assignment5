/*
=========================================================
Name : ProductList.js
Assignment : Assignment 4
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Mar 24, 2024
Description : product list for my-ecommerce-app
=========================================================
*/

import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';
import './Products.css';

const ProductList = ({ onAddToCart }) => {
    return (
        <div className="product-list">
            {productsData.map((product) => (
                <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;