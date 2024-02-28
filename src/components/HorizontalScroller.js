import React from 'react';
import Slider from 'react-slick';
import './HorizontalScroller.css'; // Import the CSS file

const featuresData = [
  { feature: 'Off-Grid Power Generation', imageUrl: '/offGrid.png' },
  { feature: 'Regenerative Braking', imageUrl: '/regenerative_braking.png' },
  { feature: 'Self-Sustaining Power Generation', imageUrl: '/sustainableenergy.png' },
  { feature: 'Motor Contor', imageUrl: '/motorControl.png' },
];

const HorizontalScroller = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="horizontal-scroller-container">
      <Slider {...settings}>
        {featuresData.map((data, index) => (
          <div key={index} className="feature-wrapper">
            <div className="feature-box">
              <img className="feature-image" src={process.env.PUBLIC_URL + data.imageUrl} alt={data.feature} />
              <div className="feature-text">{data.feature}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalScroller;
