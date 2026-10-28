import React, { useState } from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import { InstagramIcon } from './icons/InstagramIcon';
import { MessageCircle, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(salonConfig.services[0]?.name || 'Balayage y mechas');
  const [clientName, setClientName] = useState<string>('');
  const [preferredDay, setPreferredDay] = useState<string>('Esta semana');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `¡Hola LEAMON HAIRSALON! Mi nombre es ${clientName.trim() || 'una clienta'}. Me gustaría agendar una cita para *${selectedService}* en Monterrey (disponibilidad preferida: ${preferredDay}).`;
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  const hasAddress = Boolean(salonConfig.contact.address.trim());
  const hasMapsEmbed = Boolean(salonConfig.contact.googleMapsEmbedUrl.trim());

  return (
    <section className="section contact-section" id="contacto">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="luxury-badge">
            <span className="dot"></span>
            Reservaciones & Ubicación
          </div>
          <h2 className="section-title">Tu próxima cita comienza aquí.</h2>
          <div className="ornament-line">
            <span className="ornament-diamond"></span>
          </div>
          <p className="section-subtitle">
            Planifica tu visita con anticipación. Atendemos de manera personalizada para brindarte una experiencia exclusiva y sin prisas.
          </p>
        </div>

        {/* Contact Layout: 2 Columns (Direct Booking Form + Salon Information) */}
        <div className="contact-grid">
          {/* Column 1: Interactive Quick WhatsApp Booking Assistant */}
          <div className="contact-card booking-assistant-card">
            <div className="assistant-header">
              <span className="assistant-eyebrow">Atención Inmediata</span>
              <h3 className="assistant-title">Diseña tu Cita</h3>
              <p className="assistant-description">
                Selecciona el servicio de tu interés para enviar tu solicitud directamente a nuestro equipo de WhatsApp.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="client-name" className="form-label">Tu Nombre (opcional)</label>
                <input 
                  type="text" 
                  id="client-name"
                  className="form-input"
                  placeholder="Ej. Sofía Martínez"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service-select" className="form-label">Servicio Deseado</label>
                <select 
                  id="service-select"
                  className="form-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  {salonConfig.services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.priceNote || 'Previa valoración'})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferred-day" className="form-label">Preferencia de Horario / Día</label>
                <select 
                  id="preferred-day"
                  className="form-select"
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                >
                  <option value="Esta semana (próximos días)">Esta semana</option>
                  <option value="Fin de semana (Sábado)">Fin de semana (Sábado)</option>
                  <option value="Próxima semana">Próxima semana</option>
                  <option value="Fecha específica para evento especial">Fecha específica para evento especial</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn btn-gold booking-submit-btn"
                id="contact-whatsapp-submit"
              >
                <MessageCircle size={18} />
                <span>AGENDA TU CITA POR WHATSAPP</span>
              </button>

              <div className="booking-form-assurance">
                <CheckCircle2 size={14} className="assurance-icon" />
                <span>Respuesta directa y confirmación inmediata en horario de atención.</span>
              </div>
            </form>
          </div>

          {/* Column 2: Information & Location */}
          <div className="contact-card info-card">
            <h3 className="info-card-title">Información del Salón</h3>

            <div className="info-blocks-list">
              {/* WhatsApp & Direct Phone */}
              <div className="info-block">
                <div className="info-icon-box">
                  <MessageCircle size={20} />
                </div>
                <div className="info-block-content">
                  <span className="info-label">WhatsApp de Citas</span>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-value info-link"
                  >
                    {salonConfig.contact.phone || 'Abrir WhatsApp'}
                  </a>
                  <span className="info-note">Recomendado para agendar y resolver dudas de color</span>
                </div>
              </div>

              {/* Instagram */}
              <div className="info-block">
                <div className="info-icon-box">
                  <InstagramIcon size={20} />
                </div>
                <div className="info-block-content">
                  <span className="info-label">Instagram Oficial</span>
                  <a 
                    href={salonConfig.contact.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-value info-link"
                  >
                    {salonConfig.contact.instagramHandle}
                  </a>
                  <span className="info-note">Portafolio actualizado y mensajes directos</span>
                </div>
              </div>

              {/* Schedule */}
              <div className="info-block">
                <div className="info-icon-box">
                  <Clock size={20} />
                </div>
                <div className="info-block-content">
                  <span className="info-label">Horarios de Atención</span>
                  <p className="info-value text-normal">{salonConfig.contact.schedule.weekdays}</p>
                  <p className="info-value text-normal">{salonConfig.contact.schedule.saturday}</p>
                  <span className="info-note">{salonConfig.contact.schedule.sunday}</span>
                </div>
              </div>

              {/* Address / Location */}
              {hasAddress && (
                <div className="info-block">
                  <div className="info-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="info-block-content">
                    <span className="info-label">Ubicación en Monterrey</span>
                    <p className="info-value text-normal">{salonConfig.contact.address}</p>
                    <span className="info-note">Zona exclusiva de fácil acceso y estacionamiento</span>
                  </div>
                </div>
              )}
            </div>

            {/* Map Embed or Elegant Monterrey Map Placeholder */}
            <div className="salon-map-container">
              {hasMapsEmbed ? (
                <iframe
                  title="Ubicación de LEAMON HAIRSALON en Google Maps"
                  src={salonConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '4px' }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              ) : (
                <div className="map-placeholder-box">
                  <MapPin size={26} className="map-pin-icon" />
                  <span className="map-mty-title">Monterrey, Nuevo León, México</span>
                  <span className="map-mty-subtitle">Citas exclusivas y ubicación compartida vía WhatsApp</span>
                  <a 
                    href={getWhatsAppLink('¡Hola LEAMON HAIRSALON! Me gustaría conocer la ubicación exacta y cómo llegar al salón en Monterrey.')}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-action-link"
                  >
                    <span>Solicitar ubicación por WhatsApp</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
