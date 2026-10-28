import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TransformationsSection } from './components/TransformationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="leamon-app-root">
      {/* Sticky Glassmorphism Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <ServicesSection />
        <TransformationsSection />
        <ExperienceSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer Minimalista */}
      <Footer />

      {/* Conditional WhatsApp Floating Trigger */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
