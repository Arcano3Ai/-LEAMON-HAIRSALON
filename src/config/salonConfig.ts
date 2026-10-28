/**
 * LEAMON HAIRSALON - Archivo de Configuración Central
 * Todos los datos del negocio, servicios, imágenes y enlaces se editan en este archivo.
 * Si un dato de contacto está vacío (""), se oculta automáticamente en la interfaz.
 */

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  category: 'color' | 'corte' | 'cuidado' | 'estilismo';
  image: string;
  priceNote?: string; // Por ejemplo "Consulta disponibilidad" o "Previa valoración"
  durationEstimated?: string;
  featured?: boolean;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: 'color' | 'corte' | 'cuidado';
  categoryLabel: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  treatmentName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  altText: string;
  sizeRatio?: 'portrait' | 'landscape' | 'square';
}

export interface SalonConfiguration {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    city: string;
    state: string;
    country: string;
    badge: string;
    logoUrl: string;
  };
  contact: {
    // Si whatsappNumber está vacío (""), se desactivará el botón flotante y se mostrará un placeholder elegante.
    // Formato internacional sin +, ej: "528112345678" para Monterrey
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    phone: string; // Ej: "+52 (81) 1234-5678"
    email: string;
    instagramHandle: string; // Ej: "leamonhairsalon"
    instagramUrl: string;
    address: string; // Dejar vacío si aún no se cuenta con dirección física oficial
    schedule: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    googleMapsEmbedUrl: string; // URL de embed de Google Maps (dejar vacío si no hay dirección)
  };
  services: ServiceItem[];
  transformations: TransformationItem[];
  gallery: GalleryItem[];
  experiencePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const salonConfig: SalonConfiguration = {
  brand: {
    name: 'LEAMON HAIRSALON',
    tagline: 'Tu cabello. Tu estilo. Tu mejor versión.',
    subTagline: 'Descubre una experiencia de belleza diseñada para resaltar tu personalidad, con técnicas actuales, atención personalizada y acabados sofisticados.',
    city: 'Monterrey',
    state: 'Nuevo León',
    country: 'México',
    badge: 'Belleza, técnica y estilo',
    logoUrl: '/assets/logo.jpg',
  },
  contact: {
    // Reemplaza con el número oficial de WhatsApp de LEAMON HAIRSALON (ej: "528112345678")
    whatsappNumber: '528180000000', 
    whatsappDefaultMessage: '¡Hola LEAMON HAIRSALON! Me gustaría consultar información y agendar una cita en Monterrey.',
    phone: '+52 (81) 8000-0000',
    email: 'contacto@leamonhairsalon.com',
    instagramHandle: '@leamonhairsalon',
    instagramUrl: 'https://instagram.com/leamonhairsalon',
    // La dirección física se mantiene como placeholder configurable; si es vacía, el componente no muestra datos falsos
    address: 'Zona Valle Oriente / San Pedro Garza García, Monterrey, N.L.',
    schedule: {
      weekdays: 'Martes a Viernes: 10:00 am – 7:00 pm',
      saturday: 'Sábados: 9:00 am – 6:00 pm',
      sunday: 'Domingos y Lunes: Cerrado',
    },
    googleMapsEmbedUrl: '', // Dejar vacío hasta confirmar ubicación exacta en Monterrey
  },
  services: [
    {
      id: 'balayage-mechas',
      name: 'Balayage y mechas',
      shortDescription: 'Iluminación personalizada para lograr dimensión, movimiento y un acabado natural que respete la salud de tu fibra capilar.',
      category: 'color',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Consulta disponibilidad',
      durationEstimated: '3 - 4.5 hrs',
      featured: true,
    },
    {
      id: 'coloracion-profesional',
      name: 'Coloración profesional',
      shortDescription: 'Cambios de tono, cobertura de canas y corrección de color con pigmentos de alta definición adaptados a tu tono de piel.',
      category: 'color',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Consulta disponibilidad',
      durationEstimated: '2 - 3 hrs',
      featured: true,
    },
    {
      id: 'cortes-cabello',
      name: 'Cortes de cabello',
      shortDescription: 'Cortes personalizados según la estructura de tu rostro, textura natural y rutina diaria para un estilo fácil de mantener.',
      category: 'corte',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Consulta disponibilidad',
      durationEstimated: '60 min',
      featured: true,
    },
    {
      id: 'tratamientos-capilares',
      name: 'Tratamientos capilares',
      shortDescription: 'Opciones cosméticas y nutritivas para restaurar la suavidad, brillo sellado y manejabilidad del cabello tratado.',
      category: 'cuidado',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Consulta disponibilidad',
      durationEstimated: '60 - 90 min',
      featured: true,
    },
    {
      id: 'alaciados-frizz',
      name: 'Alaciados y control del frizz',
      shortDescription: 'Servicios para conseguir un acabado pulido, sedoso y disciplinado, según el tipo de hebra y el diagnóstico previo.',
      category: 'cuidado',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Consulta disponibilidad',
      durationEstimated: '2.5 - 3.5 hrs',
      featured: false,
    },
    {
      id: 'peinados-eventos',
      name: 'Peinados para eventos',
      shortDescription: 'Ondas glam, recogidos de pasarela y estilos especiales con fijación duradera para bodas, graduaciones y galas en Monterrey.',
      category: 'estilismo',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Consulta disponibilidad',
      durationEstimated: '90 min',
      featured: true,
    },
    {
      id: 'extensiones-cabello',
      name: 'Extensiones de cabello',
      shortDescription: 'Alternativas de cabello 100% natural para aportar longitud y volumen envidiable, sujetas a valoración previa.',
      category: 'estilismo',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Previa valoración',
      durationEstimated: 'Según técnica',
      featured: false,
    },
    {
      id: 'maquillaje-social',
      name: 'Maquillaje social',
      shortDescription: 'Técnicas de maquillaje editorial y de larga duración para eventos sociales, sesiones fotográficas y ocasiones especiales.',
      category: 'estilismo',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      priceNote: 'Consulta disponibilidad',
      durationEstimated: '75 min',
      featured: false,
    },
  ],
  transformations: [
    {
      id: 'trans-color',
      title: 'Transición Balayage Champagne',
      category: 'color',
      categoryLabel: 'Color y dimensión',
      description: 'Difuminado suave de raíz con puntos de luz dorados para crear profundidad sin efecto de demarcación.',
      beforeImage: 'https://images.unsplash.com/photo-1584297091622-af8e5fd85a49?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
      treatmentName: 'Técnica Balayage Signature + Matiz Perlado',
    },
    {
      id: 'trans-corte',
      title: 'Bob Editorial con Capas Invisibles',
      category: 'corte',
      categoryLabel: 'Cortes y movimiento',
      description: 'Redefinición de estructura eliminando peso en puntas para potenciar el movimiento orgánico del cabello.',
      beforeImage: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
      treatmentName: 'Corte Texturizado en Seco',
    },
    {
      id: 'trans-brillo',
      title: 'Restauración y Sellado Térmico',
      category: 'cuidado',
      categoryLabel: 'Brillo y cuidado',
      description: 'Cauterización de cutícula y nutrición intensiva para recuperar hebras opacas y propensas al encrespamiento.',
      beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      treatmentName: 'Protocolo Gloss & Botox Capilar',
    },
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Rubio Balayage Champagne',
      category: 'Color & Luces',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80',
      altText: 'Cabello rubio con mechas balayage y ondas suaves',
      sizeRatio: 'portrait',
    },
    {
      id: 'gal-2',
      title: 'Tonos Castaños y Caramelo',
      category: 'Brunette Glow',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      altText: 'Tonos castaños con reflejos chocolate y brillo sedoso',
      sizeRatio: 'square',
    },
    {
      id: 'gal-3',
      title: 'Cabello Oscuro Espejo',
      category: 'Color Profundo',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80',
      altText: 'Cabello oscuro con acabado pulido y brillo extremo',
      sizeRatio: 'portrait',
    },
    {
      id: 'gal-4',
      title: 'Cortes Modernos con Textura',
      category: 'Corte de Autor',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
      altText: 'Corte moderno con movimiento y textura en capas ligeras',
      sizeRatio: 'landscape',
    },
    {
      id: 'gal-5',
      title: 'Ondas Glamour para Gala',
      category: 'Peinado Social',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
      altText: 'Peinado con ondas marcadas de pasarela y fijación flexible',
      sizeRatio: 'portrait',
    },
    {
      id: 'gal-6',
      title: 'Detalles y Atmósfera LEAMON',
      category: 'Experiencia',
      image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80',
      altText: 'Interior de salón de belleza de lujo con iluminación cálida y diseño minimalista',
      sizeRatio: 'landscape',
    },
  ],
  experiencePillars: [
    {
      title: 'Asesoría personalizada de imagen',
      description: 'Analizamos la morfología de tu rostro, tono de piel y estilo de vida antes de proponer cualquier cambio.',
      icon: 'sparkles',
    },
    {
      title: 'Atención enfocada en cada cliente',
      description: 'Tiempos reservados exclusivamente para ti, en un ambiente relajado sin prisas ni sobrecupo.',
      icon: 'heart',
    },
    {
      title: 'Técnicas actuales de estilismo',
      description: 'Constante actualización en las tendencias globales de colorimetría, difuminados y cortes de autor.',
      icon: 'scissors',
    },
    {
      title: 'Cuidado y acabado profesional',
      description: 'Utilizamos productos de calidad profesional que preservan la integridad, el brillo y la fuerza de tu cabello.',
      icon: 'shield-check',
    },
  ],
};

/**
 * Función auxiliar para generar el enlace oficial de WhatsApp con mensaje personalizado
 */
export const getWhatsAppLink = (customMessage?: string): string => {
  const number = salonConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  if (!number) return '#';
  const text = encodeURIComponent(customMessage || salonConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${number}?text=${text}`;
};
