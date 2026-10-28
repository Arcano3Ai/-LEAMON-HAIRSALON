import React from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import { Sparkles, HeartHandshake, Scissors, ShieldCheck, MessageCircle } from 'lucide-react';
import './ExperienceSection.css';

export const ExperienceSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles size={24} className="pillar-icon" />;
      case 'heart':
        return <HeartHandshake size={24} className="pillar-icon" />;
      case 'scissors':
        return <Scissors size={24} className="pillar-icon" />;
      case 'shield-check':
        return <ShieldCheck size={24} className="pillar-icon" />;
      default:
        return <Sparkles size={24} className="pillar-icon" />;
    }
  };

  return (
    <section className="section experience-section" id="experiencia">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="luxury-badge">
            <span className="dot"></span>
            Filosofía LEAMON
          </div>
          <h2 className="section-title">Más que un salón, una experiencia.</h2>
          <div className="ornament-line">
            <span className="ornament-diamond"></span>
          </div>
          <p className="section-subtitle">
            Un santuario de bienestar en Monterrey donde el tiempo se detiene para dedicarse por completo a sublimar tu imagen.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {salonConfig.experiencePillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-number">0{idx + 1}</div>
              <div className="pillar-icon-box">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
              <div className="pillar-bottom-line"></div>
            </div>
          ))}
        </div>

        {/* Editorial Quote Box */}
        <div className="experience-quote-card">
          <div className="quote-content">
            <span className="quote-mark">“</span>
            <blockquote className="quote-text">
              La verdadera sofisticación reside en resaltar la belleza natural que ya posees, cuidando cada hebra con precisión y maestría.
            </blockquote>
            <cite className="quote-author">— LEAMON HAIRSALON MONTERREY</cite>
          </div>
          <div className="quote-action">
            <a 
              href={getWhatsAppLink('¡Hola LEAMON HAIRSALON! Deseo vivir la experiencia en su salón de Monterrey.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold experience-cta-btn"
            >
              <MessageCircle size={16} />
              <span>Reserva tu Momento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
