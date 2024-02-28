import React from "react";
//import { BsFillPlayCircleFill } from "react-icons/bs";
import './AboutUs.css'; // Import the CSS file


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src='/AboutUs.png' alt="About Background" />
      </div>
      {/* <div className="about-section-image-container">
        <img src='/AboutUs.png' alt="About Section Image" />
      </div> */}
       <div className="about-section-text-container">
        {/* Rest of your content */}
        <p className="about-text">
          MARK 1, Experience the future of sustainable energy with our groundbreaking Self-Sustaining Electromagnetic Engine. Harnessing the power of solenoids, electromagnets, and regenerative braking, this innovative system transforms motion into electricity, providing a perpetual cycle of clean energy.
        </p>
        <img src='/AboutUs_Description.png' alt="About Background" />
      </div>
    </div>
  );
};

export default About;
