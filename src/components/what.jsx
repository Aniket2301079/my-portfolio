// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = 'your-phone-number'; // Replace with your WhatsApp phone number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-8 right-8 p-4 bg-green-500 text-white rounded-full shadow-lg cursor-pointer transition transform hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp size={28} />
    </div>
  );
};

export default WhatsAppButton;
