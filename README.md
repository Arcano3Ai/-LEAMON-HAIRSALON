# LEAMON HAIRSALON — Landing Page Premium (Monterrey, N.L.)

Landing page moderna, elegante y completamente responsive para **LEAMON HAIRSALON**, inspirada en marcas de belleza de lujo internacional con una estética minimalista, sofisticada y femenina.

---

## 🎨 Identidad Visual y Diseño
- **Paleta de Colores**:
  - *Marfil y Crema*: Fondos principales (`#FAF7F2`, `#F4EFEA`).
  - *Negro Carbón Grafito*: Títulos y contrastes (`#1F1D1A`, `#282421`).
  - *Oro Champagne Satinado*: Acentos, líneas ornamentales y detalles (`#C5A059`, degradados metálicos suaves).
  - *Beige Cálido*: Tarjetas y secciones secundarias (`#EFE7DC`).
- **Tipografías**:
  - Encabezados: `Cormorant Garamond` (editorial serif de alta costura).
  - Textos de lectura e interfaz: `Plus Jakarta Sans` (sans-serif nítida y geométrica).
- **Estilo**: Lujo discreto, editorial de moda, espacios amplios, microanimaciones fluidas sin ralentizaciones.

---

## 📱 Secciones Incluidas
1. **Header & Navbar**: Barra con efecto glassmorphism, logotipo oficial de LEAMON, enlaces con scroll suave y botón de cita directa. Menú móvil tipo drawer animado.
2. **Hero Principal**: Título de marca, badge *“Belleza, técnica y estilo”*, fotografía editorial de alto impacto, dual CTA (*Agendar Cita* y *Explorar Servicios*) y cintillo de exclusividad en Monterrey.
3. **Servicios Populares en Monterrey**:
   - Balayage y mechas
   - Coloración profesional
   - Cortes de cabello
   - Tratamientos capilares
   - Alaciados y control del frizz
   - Peinados para eventos
   - Extensiones de cabello
   - Maquillaje social
   - *Filtros por categoría y botón de consulta por WhatsApp personalizado para cada servicio.*
4. **Transformaciones (“El cambio está en los detalles”)**: Selector interactivo de antes y después por categorías (*Color y dimensión*, *Cortes y movimiento*, *Brillo y cuidado*), con aviso de muestras editoriales.
5. **Experiencia LEAMON (“Más que un salón, una experiencia”)**: Los 4 pilares de exclusividad (asesoría personalizada, atención enfocada, técnicas actuales y cuidado profesional) con iconografía lineal de lujo.
6. **Galería Visual**: Cuadrícula asimétrica de revista de moda con modal *lightbox* para ampliación en alta resolución y enlace de consulta.
7. **Contacto & Reservaciones (“Tu próxima cita comienza aquí”)**: Formulario interactivo para armar la solicitud de cita directo a WhatsApp, horarios detallados (Martes a Sábado), Instagram oficial, ubicación y mapa.
8. **Botón Flotante de WhatsApp**: Acceso rápido flotante con tooltip discreto, condicionado a la configuración del número.
9. **Footer Minimalista**: Enlaces rápidos, monograma de marca y derechos reservados.

---

## ⚙️ Archivo de Configuración Centralizada

Para cambiar cualquier dato del salón (número de WhatsApp, imágenes, servicios, horarios o dirección), edita exclusivamente:

📂 `src/config/salonConfig.ts`

```typescript
export const salonConfig = {
  brand: {
    name: 'LEAMON HAIRSALON',
    tagline: 'Tu cabello. Tu estilo. Tu mejor versión.',
    badge: 'Belleza, técnica y estilo',
    city: 'Monterrey',
    state: 'Nuevo León',
    logoUrl: '/assets/logo.jpg',
  },
  contact: {
    whatsappNumber: '528180000000', // Coloca aquí el número oficial (código de país + 10 dígitos)
    phone: '+52 (81) 8000-0000',
    instagramHandle: '@leamonhairsalon',
    instagramUrl: 'https://instagram.com/leamonhairsalon',
    address: 'Zona Valle Oriente / San Pedro Garza García, Monterrey, N.L.',
    schedule: {
      weekdays: 'Martes a Viernes: 10:00 am – 7:00 pm',
      saturday: 'Sábados: 9:00 am – 6:00 pm',
      sunday: 'Domingos y Lunes: Cerrado',
    },
    googleMapsEmbedUrl: '', // Pega el iframe src de Google Maps cuando se defina la dirección final
  },
  // Servicios, transformaciones y galería...
};
```

*Nota: Si `whatsappNumber` o `address` se dejan vacíos (`""`), los componentes correspondientes se adaptan automáticamente sin mostrar datos ficticios.*

---

## 🚀 Comandos de Desarrollo y Producción

```bash
# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (Zero errors, Type-check + Minificación)
npm run build

# Previsualizar el bundle de producción
npm run preview
```

---

## 🔍 SEO Local Configurado para Monterrey
- **Title**: `LEAMON HAIRSALON | Salón de Belleza en Monterrey`
- **Meta Description**: Optimizada para posicionamiento en Monterrey y San Pedro Garza García en servicios de coloración, balayage y cuidado capilar.
- **OpenGraph & Twitter Cards**: Configurados para compartir la página en WhatsApp, Facebook e Instagram con vista previa de lujo.
- **Favicon**: Monograma SVG dorado sobre marfil.
