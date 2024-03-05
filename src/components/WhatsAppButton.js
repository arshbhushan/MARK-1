import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const whatsappLink = `https://wa.me/${+919988941819}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <button onClick={handleClick}>
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
