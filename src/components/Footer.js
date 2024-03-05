import React from "react";
import Logo from "../Assets/Logow-nobg.png";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>

      </div>
      <div className="footer-section-two" id="contact">
        <div className="footer-section-columns">
         
          <span>Help</span>
          <span>Share</span>

        </div>
        <div className="footer-section-columns">
          <span>123-4567-8910</span>
          <span>teamgigabyte@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;