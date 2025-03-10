import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../style-sheet/WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp de la empresa
    const phoneNumber = '573176282979';
    // Mensaje predeterminado
    const message = 'Hola, estoy interesado en conocer más sobre sus productos.';
    // URL de WhatsApp con el número y mensaje
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      className="whatsapp-button"
      onClick={handleWhatsAppClick}
      aria-label="Contactar por WhatsApp"
    >
      <div className="whatsapp-button-content">
        <FaWhatsapp />
        <span className="tooltip">Contactar a un experto</span>
      </div>
      <div className="animation-ring"></div>
    </button>
  );
};

export default WhatsAppButton;
