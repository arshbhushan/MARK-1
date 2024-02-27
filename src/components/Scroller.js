import React, { useState, useRef } from 'react';
import './HorizontalScroller.css';

const Scroller = ({ featuresData }) => {
  const scrollerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollOffset) => {
    if (scrollerRef.current) {
      const newScrollLeft = scrollLeft + scrollOffset;
      scrollerRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  };

  return (
    <div className="horizontal-scroller-container">
      <div className="scroller-controls">
        <button onClick={() => handleScroll(-100)}>Left</button>
        <button onClick={() => handleScroll(100)}>Right</button>
      </div>
      <div ref={scrollerRef} className="scroller-content">
        {featuresData.map((data, index) => (
          <div key={index} className="feature-box">
            <img className="feature-image" src={process.env.PUBLIC_URL + data.imageUrl} alt={data.feature} />
            <div className="feature-text">{data.feature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
