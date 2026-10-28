import React, { useState, useEffect } from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import { MessageCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header glass-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#" className="navbar-brand" onClick={closeMenu}>
          <img 
            src={salonConfig.brand.logoUrl} 
            alt={salonConfig.brand.name} 
            className="navbar-logo-img"
            onError={(e) => {
              // Si falla la imagen, mostrar texto estilizado
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="navbar-brand-text">
            <span className="brand-title">LEAMON</span>
            <span className="brand-subtitle">HAIRSALON</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#transformacion" className="nav-link">Transformaciones</a>
          <a href="#experiencia" className="nav-link">Experiencia</a>
          <a href="#galeria" className="nav-link">Galería</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-gold navbar-cta-btn"
            id="nav-whatsapp-btn"
          >
            <MessageCircle size={17} />
            <span>Agendar Cita</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-brand-wrapper">
            <span className="mobile-brand-title">LEAMON</span>
            <span className="mobile-brand-subtitle">HAIRSALON • MONTERREY</span>
          </div>

          <nav className="mobile-nav-links">
            <a href="#servicios" className="mobile-nav-link" onClick={closeMenu}>Servicios Populares</a>
            <a href="#transformacion" className="mobile-nav-link" onClick={closeMenu}>Transformaciones</a>
            <a href="#experiencia" className="mobile-nav-link" onClick={closeMenu}>La Experiencia</a>
            <a href="#galeria" className="mobile-nav-link" onClick={closeMenu}>Galería Editorial</a>
            <a href="#contacto" className="mobile-nav-link" onClick={closeMenu}>Contacto & Citas</a>
          </nav>

          <div className="mobile-drawer-footer">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold mobile-cta-btn"
              onClick={closeMenu}
            >
              <MessageCircle size={18} />
              <span>Agendar Cita por WhatsApp</span>
            </a>
            <p className="mobile-footer-location">{salonConfig.brand.city}, {salonConfig.brand.state}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
