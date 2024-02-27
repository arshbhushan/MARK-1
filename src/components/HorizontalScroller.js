import React from 'react';
import './HorizontalScroller.css'; // Import the CSS file

const featuresData = [
  { feature: 'Off-Grid Power Generation', imageUrl: '/offGrid.png' },
  { feature: 'Regenerative Braking', imageUrl: '/regenerative_braking.png' },
  { feature: 'Self-Sustaining Power Generation', imageUrl: '/sustainableenergy.png' },
  { feature: 'Motor Contor', imageUrl: '/motorControl.png' },
];

const HorizontalScroller = () => {
  return (
    <div className="horizontal-scroller-container">
      <div className="scroller-content">
        {featuresData.map((data, index) => (
          <div key={index} className="feature-wrapper">
            <div className="feature-box">
              <img className="feature-image" src={process.env.PUBLIC_URL + data.imageUrl} alt={data.feature} />
              <div className="feature-text">{data.feature}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;
