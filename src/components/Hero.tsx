import React from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import { MessageCircle, ArrowDown, Sparkles, MapPin, Clock } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-container">
        {/* Left Column: Editorial Copy */}
        <div className="hero-content animate-fade">
          <div className="hero-badge-wrapper">
            <span className="luxury-badge">
              <span className="dot"></span>
              {salonConfig.brand.badge}
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-main">{salonConfig.brand.name}</span>
          </h1>

          <p className="hero-tagline">
            Tu cabello. Tu estilo. Tu mejor versión.
          </p>

          <div className="ornament-line hero-ornament">
            <span className="ornament-diamond"></span>
          </div>

          <p className="hero-description">
            {salonConfig.brand.subTagline}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold hero-cta-primary"
              id="hero-whatsapp-btn"
            >
              <MessageCircle size={18} />
              <span>Agendar Cita</span>
            </a>

            <a 
              href="#servicios" 
              className="btn btn-outline hero-cta-secondary"
              id="hero-services-btn"
            >
              <span>Explorar Servicios</span>
              <ArrowDown size={16} />
            </a>
          </div>

          {/* Luxury Highlights Bar */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <Sparkles size={16} className="highlight-icon" />
              <span>Atención exclusiva por cita</span>
            </div>
            <div className="highlight-separator">•</div>
            <div className="highlight-item">
              <MapPin size={16} className="highlight-icon" />
              <span>{salonConfig.brand.city}, {salonConfig.brand.state}</span>
            </div>
            <div className="highlight-separator">•</div>
            <div className="highlight-item">
              <Clock size={16} className="highlight-icon" />
              <span>Diagnóstico capilar previo</span>
            </div>
          </div>
        </div>

        {/* Right Column: High Fashion Editorial Portrait */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-frame">
            <div className="frame-gold-border"></div>
            <img 
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=85" 
              alt="Modelo con cabello brillante y estilizado profesionalmente en LEAMON HAIRSALON"
              className="hero-main-img"
              loading="eager"
            />
            
            {/* Floating Luxury Tag */}
            <div className="hero-floating-card">
              <div className="card-symbol">✨</div>
              <div className="card-details">
                <span className="card-label">Técnica Especializada</span>
                <span className="card-value">Dimensión & Brillo Espejo</span>
              </div>
            </div>
          </div>

          {/* Secondary architectural accent block */}
          <div className="hero-accent-backdrop"></div>
        </div>
      </div>
    </section>
  );
};
