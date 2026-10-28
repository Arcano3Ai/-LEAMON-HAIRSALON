import React, { useState, useRef } from 'react';
import { salonConfig, getWhatsAppLink } from '../config/salonConfig';
import { Sparkles, MessageCircle, Info } from 'lucide-react';
import './TransformationsSection.css';

export const TransformationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'color' | 'corte' | 'cuidado'>('color');
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeItem = salonConfig.transformations.find(t => t.category === selectedCategory) || salonConfig.transformations[0];

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  };

  return (
    <section className="section transformations-section" id="transformacion">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="luxury-badge">
            <span className="dot"></span>
            Evolución Estilística
          </div>
          <h2 className="section-title">El cambio está en los detalles.</h2>
          <div className="ornament-line">
            <span className="ornament-diamond"></span>
          </div>
          <p className="section-subtitle">
            Cada transformación refleja armonía, técnica avanzada y respeto por la fibra capilar.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="transformations-tabs">
          {salonConfig.transformations.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`trans-tab-btn ${selectedCategory === item.category ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(item.category);
                setSliderPosition(50);
              }}
            >
              <Sparkles size={14} className="trans-tab-icon" />
              <span>{item.categoryLabel}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="transformation-card">
          <div className="transformation-layout">
            {/* Visual Slider Interactive Container */}
            <div 
              className="trans-interactive-wrapper"
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onPointerMove={handlePointerMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <div className="trans-img-layer trans-after-layer">
                <img 
                  src={activeItem.afterImage} 
                  alt={`Resultado: ${activeItem.title}`}
                  className="trans-img"
                  loading="lazy"
                />
                <span className="trans-state-badge badge-after">Después</span>
              </div>

              {/* Before Image (Clipped Foreground) */}
              <div 
                className="trans-img-layer trans-before-layer"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={activeItem.beforeImage} 
                  alt={`Estado inicial: ${activeItem.title}`}
                  className="trans-img"
                  loading="lazy"
                />
                <span className="trans-state-badge badge-before">Antes</span>
              </div>

              {/* Gold Divider Handle */}
              <div 
                className="trans-slider-handle"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="slider-line"></div>
                <div className="slider-button">
                  <span className="slider-arrows">⟨ ⟩</span>
                </div>
                <div className="slider-line"></div>
              </div>
            </div>

            {/* Editorial Information Sidebar */}
            <div className="transformation-info-panel">
              <span className="trans-category-tag">{activeItem.categoryLabel}</span>
              <h3 className="trans-item-title">{activeItem.title}</h3>
              
              <div className="trans-protocol-box">
                <span className="protocol-label">Protocolo sugerido:</span>
                <p className="protocol-name">{activeItem.treatmentName}</p>
              </div>

              <p className="trans-item-description">
                {activeItem.description}
              </p>

              <div className="trans-action-box">
                <a 
                  href={getWhatsAppLink(`¡Hola LEAMON HAIRSALON! Me gustó la transformación de ${activeItem.title} (${activeItem.categoryLabel}) y quiero agendar una valoración personalizada.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold trans-cta-btn"
                >
                  <MessageCircle size={16} />
                  <span>Quiero una Valoración Similar</span>
                </a>
              </div>

              <div className="trans-drag-hint">
                <span>← Arrastra el divisor dorado para comparar el antes y después →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Luxury Disclaimer */}
        <div className="trans-disclaimer-note">
          <Info size={15} className="disclaimer-icon" />
          <p>
            <strong>Aviso de demostración editorial:</strong> Las imágenes mostradas son fotografías de muestra profesional y referencia visual sobre resultados estéticos de técnicas en tendencia. Los resultados se adaptan a la textura, tono previo y salud capilar de cada cliente en Monterrey.
          </p>
        </div>
      </div>
    </section>
  );
};
