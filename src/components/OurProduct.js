import React from 'react';
import Slider from 'react-slick';
import YouTube from 'react-youtube';
import './ourProduct.css'; // Import the CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productItems = [
  { type: 'image', source: '/mainImage.jpg' },
  { type: 'image', source: '/secondImage.jpg' },
  { type: 'image', source: '/thirdImage.jpg' },
  { type: 'video', source: 'hqzQPORMHU8' }, // YouTube video ID
];

const mainSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const OurProduct = () => {
  return (
    <>
      <div className="goals-background-image-container" id='product'>
        <img src='/ourProduct.png' alt="Product Background" />
      </div>
      <div className="our-product-container">
        <Slider {...mainSliderSettings} className="custom-slider">
          {productItems.map((item, index) => (
            <div key={index} className="product-item">
              {item.type === 'image' ? (
                <img src={item.source} alt={`Product ${index + 1}`} />
              ) : (
                <YouTube videoId={item.source} />
              )}
            </div>
          ))}
        </Slider>
        <div className="product-details">
          <h2>Mark 1</h2>
          <p>
            Welcome to the landing page of Mark 1,
            Explore the innovative world of sustainable home power as we introduce Mark 1 — a breakthrough in energy solutions designed for India.
            Dive into its features, understand the positive impact, and envision how this user-friendly powerhouse can transform your home's energy dynamics.
            Join us on the journey towards a greener, more empowered future.
            Experience the next level of sustainable living with Mark 1.
            Let's illuminate homes and communities sustainably! 🌿💡
          </p>

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
