import React, { useState } from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import type { ServiceItem } from '../config/salonConfig';
import { MessageCircle, Clock, Sparkles } from 'lucide-react';
import './ServicesSection.css';

type FilterCategory = 'all' | 'color' | 'corte' | 'cuidado' | 'estilismo';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredServices = salonConfig.services.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getCustomWhatsAppLink = (service: ServiceItem) => {
    const msg = `¡Hola LEAMON HAIRSALON! Me interesa recibir asesoría y consultar disponibilidad para el servicio de *${service.name}* en Monterrey.`;
    return getWhatsAppLink(msg);
  };

  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="luxury-badge">
            <span className="dot"></span>
            Carta de Servicios
          </div>
          <h2 className="section-title">Servicios Populares en Monterrey</h2>
          <div className="ornament-line">
            <span className="ornament-diamond"></span>
          </div>
          <p className="section-subtitle">
            Técnicas contemporáneas y formulaciones profesionales diseñadas para resaltar la salud, dimensión y elegancia de tu cabello.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="services-filter-tabs">
          <button 
            type="button"
            className={`filter-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Todos ({salonConfig.services.length})
          </button>
          <button 
            type="button"
            className={`filter-tab-btn ${activeCategory === 'color' ? 'active' : ''}`}
            onClick={() => setActiveCategory('color')}
          >
            Coloración & Luces
          </button>
          <button 
            type="button"
            className={`filter-tab-btn ${activeCategory === 'corte' ? 'active' : ''}`}
            onClick={() => setActiveCategory('corte')}
          >
            Cortes de Autor
          </button>
          <button 
            type="button"
            className={`filter-tab-btn ${activeCategory === 'cuidado' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cuidado')}
          >
            Cuidado & Tratamientos
          </button>
          <button 
            type="button"
            className={`filter-tab-btn ${activeCategory === 'estilismo' ? 'active' : ''}`}
            onClick={() => setActiveCategory('estilismo')}
          >
            Estilismo & Ocasión
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="service-card-img"
                  loading="lazy"
                />
                <div className="service-overlay"></div>
                {service.priceNote && (
                  <span className="service-price-badge">
                    {service.priceNote}
                  </span>
                )}
              </div>

              <div className="service-card-body">
                <div className="service-meta">
                  {service.durationEstimated && (
                    <span className="service-duration">
                      <Clock size={13} />
                      {service.durationEstimated}
                    </span>
                  )}
                  {service.featured && (
                    <span className="service-featured-tag">
                      <Sparkles size={12} />
                      Destacado
                    </span>
                  )}
                </div>

                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>

                <div className="service-card-footer">
                  <a 
                    href={getCustomWhatsAppLink(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark service-book-btn"
                    title={`Agendar ${service.name} por WhatsApp`}
                  >
                    <MessageCircle size={15} />
                    <span>Consultar Cita</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Informative Note */}
        <div className="services-disclaimer-card">
          <p className="disclaimer-text">
            <strong>Atención personalizada en Monterrey:</strong> Cada servicio comienza con una valoración previa de la hebra y tono de piel para garantizar un resultado armónico y duradero. Sujeto a valoración profesional y disponibilidad de agenda.
          </p>
        </div>
      </div>
    </section>
  );
};
