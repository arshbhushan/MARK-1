import React from "react";
import './AboutUs.css'; // Import the CSS file

const About = () => {
  return (
    <>   
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src='/AboutUs.png' alt="About Background" />
        </div>
        {/* If needed, you can uncomment the following section for another image */}
        {/* <div className="about-section-image-container">
          <img src='/AboutUs.png' alt="About Section Image" />
        </div> */}
        <div className="about-section-text-container">
          <p className="about-text">
            MARK 1, Experience the future of sustainable energy with our groundbreaking Self-Sustaining Electromagnetic Engine. Harnessing the power of solenoids, electromagnets, and regenerative braking, this innovative system transforms motion into electricity, providing a perpetual cycle of clean energy.
          </p>
          <img src='/AboutUs_Description.png' alt="About Description" />
        </div>
      </div>
    </>
  );
};

export default About;
