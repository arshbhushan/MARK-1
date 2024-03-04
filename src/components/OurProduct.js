// OurProduct.js
import React from 'react';
import './ourProduct.css'; // Import the CSS file

const OurProduct = () => {
    return (
        <>
            <div className="goals-background-image-container"> <img src='/ourProduct.png' alt="Product Background" />
            </div>
            <div className="our-product-container">
                <div className="product-image">
                    {/* Your product image goes here */}
                    <img src="/new.jpeg" alt="Product" />
                </div>
                <div className="product-details">
                    <h2>Mark 1</h2>
                    <p>
                        Welcome to the landing page of Mark 1,
                        Explore the innovative world of sustainable home power as we introduce Mark 1 — a breakthrough in energy solutions designed for India.
                        Dive into its features, understand the positive impact, and envision how this user-friendly powerhouse can transform your home's energy dynamics.
                        Join us on the journey towards a greener, more empowered future.
                        Experience the next level of sustainable living with Mark 1.
                        Let's illuminate homes and communities sustainably! 🌿💡        </p>
                    <h3>Specifications</h3>
                    <ul>
                        <li>Specification 1: Lorem ipsum</li>
                        <li>Specification 2: Dolor sit amet</li>
                        {/* Add more specifications as needed */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default OurProduct;
