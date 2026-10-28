import React from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import { InstagramIcon } from './icons/InstagramIcon';
import { MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="footer-brand-name">LEAMON</span>
              <span className="footer-brand-sub">HAIRSALON</span>
            </div>
            <p className="footer-bio">
              Dedicados al arte del estilismo contemporáneo, iluminación de alta definición y cuidado integral del cabello en Monterrey, Nuevo León.
            </p>
            <div className="footer-location-badge">
              <MapPin size={14} className="location-pin" />
              <span>{salonConfig.brand.city}, {salonConfig.brand.state}, {salonConfig.brand.country}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links-list">
              <li><a href="#servicios" className="footer-link">Servicios Populares</a></li>
              <li><a href="#transformacion" className="footer-link">Transformaciones</a></li>
              <li><a href="#experiencia" className="footer-link">Filosofía LEAMON</a></li>
              <li><a href="#galeria" className="footer-link">Galería Editorial</a></li>
              <li><a href="#contacto" className="footer-link">Reservaciones & Citas</a></li>
            </ul>
          </div>

          {/* Services Quick Reference */}
          <div className="footer-services-col">
            <h4 className="footer-col-title">Especialidades</h4>
            <ul className="footer-links-list">
              <li><a href="#servicios" className="footer-link">Balayage & Mechas</a></li>
              <li><a href="#servicios" className="footer-link">Coloración Profesional</a></li>
              <li><a href="#servicios" className="footer-link">Cortes de Autor</a></li>
              <li><a href="#servicios" className="footer-link">Tratamientos Nutritivos</a></li>
              <li><a href="#servicios" className="footer-link">Peinados de Gala</a></li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Citas Exclusivas</h4>
            <p className="footer-contact-text">
              Reserva tu espacio previamente para garantizar una atención enfocada y personalizada.
            </p>
            <div className="footer-social-links">
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href={salonConfig.contact.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="Ver perfil de Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {salonConfig.brand.name}. Todos los derechos reservados. Monterrey, N.L., México.
          </p>

          <button 
            type="button" 
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
