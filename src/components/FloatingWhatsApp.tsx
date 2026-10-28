import React from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export const FloatingWhatsApp: React.FC = () => {
  const number = salonConfig.contact.whatsappNumber?.trim();
  if (!number) return null;

  return (
    <aside className="floating-whatsapp-container" aria-label="Contacto flotante de WhatsApp">
      <a 
        href={getWhatsAppLink()} 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        id="floating-whatsapp-button"
        title="Agendar cita por WhatsApp"
      >
        <div className="floating-icon-wrapper">
          <MessageCircle size={24} className="whatsapp-icon" />
        </div>
        <span className="floating-tooltip">
          ¿Deseas una cita? Escríbenos
        </span>
      </a>
    </aside>
  );
};
