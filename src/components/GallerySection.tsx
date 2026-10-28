import React, { useState } from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import type { GalleryItem } from '../config/salonConfig';
import { Maximize2, X, MessageCircle } from 'lucide-react';
import './GallerySection.css';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedPhoto(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section gallery-section" id="galeria">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="luxury-badge">
            <span className="dot"></span>
            Editorial de Belleza
          </div>
          <h2 className="section-title">Galería Visual</h2>
          <div className="ornament-line">
            <span className="ornament-diamond"></span>
          </div>
          <p className="section-subtitle">
            Luminosidad, texturas y siluetas capturadas con la estética de una portada de moda internacional.
          </p>
        </div>

        {/* Editorial Masonry/Magazine Grid */}
        <div className="editorial-gallery-grid">
          {salonConfig.gallery.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item item-ratio-${item.sizeRatio || 'square'} item-grid-${index + 1}`}
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`Ver imagen ampliada: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(item);
                }
              }}
            >
              <div className="gallery-item-inner">
                <img 
                  src={item.image} 
                  alt={item.altText} 
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <div className="gallery-hover-content">
                    <span className="gallery-cat-pill">{item.category}</span>
                    <h3 className="gallery-item-name">{item.title}</h3>
                    <div className="gallery-zoom-badge">
                      <Maximize2 size={16} />
                      <span>Ver detalle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Invitation Card */}
        <div className="gallery-social-banner">
          <div className="social-banner-text">
            <span className="social-eyebrow">Síguenos en Instagram</span>
            <p className="social-handle">{salonConfig.contact.instagramHandle}</p>
            <p className="social-desc">Descubre publicaciones diarias con fórmulas de color, técnicas y looks terminados en Monterrey.</p>
          </div>
          <a 
            href={salonConfig.contact.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-dark social-btn"
          >
            <span>Ver Instagram Oficial</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="gallery-modal-backdrop" onClick={closeLightbox}>
          <div 
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="gallery-modal-close" 
              onClick={closeLightbox}
              aria-label="Cerrar vista previa"
            >
              <X size={24} />
            </button>

            <div className="gallery-modal-image-wrapper">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.altText}
                className="gallery-modal-img"
              />
            </div>

            <div className="gallery-modal-footer">
              <div className="modal-caption">
                <span className="modal-category">{selectedPhoto.category}</span>
                <h4 className="modal-title">{selectedPhoto.title}</h4>
                <p className="modal-description">{selectedPhoto.altText}</p>
              </div>

              <a 
                href={getWhatsAppLink(`¡Hola LEAMON HAIRSALON! Vi en su galería el estilo "${selectedPhoto.title}" (${selectedPhoto.category}) y quisiera consultar si es realizable en mi cabello.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold modal-cta-btn"
              >
                <MessageCircle size={16} />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
