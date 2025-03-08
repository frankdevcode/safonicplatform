// importando las imágenes de los productos
import luminariaLedSolar from '../images/home/products/luminaria-led-solar.jpg';
import amazonEchoDot from '../images/home/products/amazon-echo-dot.jpg';
import cctvCamera from '../images/home/products/cctv-camera.jpg';
import mototools from '../images/home/products/kit-mototool-herramienta.jpg';
import digitalLocks from '../images/home/products/cerradura-inteligente.jpg';
import smartphones from '../images/home/products/celular-motorola.jpg';

// src/data/products.js
const products = [
  {
    id: 1,
    name: " Luminaria LED Solar",
    category: "led",
    description: "Iluminación automática con sensor hasta 6 metros, portátil, fácil instalación y sin mantenimiento.",
    image: luminariaLedSolar,
    features: [
      "Panel solar de alta eficiencia",
      "Batería recargable de larga duración",
      "Resistente al agua y polvo (IP65)",
      "Encendido automático al anochecer",
      "Diseño compacto y ligero"
    ]
  },
  {
    id: 2,
    name: "Amazon Echo Dot",
    category: "audio",
    description: "Asistente de voz inteligente con altavoz y micrófono integrados para controlar tus dispositivos y obtener información.",
    image: amazonEchoDot,
    features: [
      "Diseño compacto y elegante",
      "Control por voz con Alexa",
      "Conexión Bluetooth y WiFi",
      "Compatible con dispositivos inteligentes",
      "Múltiples funciones y habilidades"
      
    ]
  },
  {
    id: 3,
    name: " Cámara de Seguridad CCTV",
    category: "security",
    description: "Vigilancia de alta definición con visión nocturna y detección inteligente de movimiento.",
    image: cctvCamera,
    features: [
      "Grabación en 4K Ultra HD",
      "Visión nocturna infrarroja hasta 30m",
      "Detección inteligente de personas",
      "Almacenamiento en la nube o local",
      "Micrófono doble vía"
    ]
  },
  {
    id: 4,
    name: "Kit Mototool 180W + 110 Accesorios",
    category: "tools",
    description: "Herramienta multifunción para cortar, lijar, pulir y más, con accesorios intercambiables.",
    image: mototools,
    features: [
      "Potencia de 180W y velocidad variable",
      "110 accesorios para diferentes tareas",
      "Diseño ergonómico y compacto",
      "Fácil cambio de accesorios",
      "Maletín de transporte incluido"
    ]
  },
  {
    id: 5,
    name: "Cerradura Inteligente 5 Modos De Acceso",
    category: "security",
    description: "Accede fácilmente a tu hogar con seguridad inteligente avanzada y 5 modos de acceso.",
    image: digitalLocks,
    features: [
      "5 métodos de desbloqueo",
      "Teclado retroiluminado",
      "Registro de accesos y notificaciones",
      "Diseño resistente y duradero",
      "Fácil instalación y configuración"
    ]
  },
  {
    id: 6,
    name: "Celular Motorola G04s 128GB", 
    category: "smartphones",
    description: "Diseño elegante, pantalla vibrante, sonido Dolby Atmos®, cámara inteligente con IA y batería duradera.",
    image: smartphones,
    features: [
      "Pantalla Max Vision de 6.56 pulgadas",
      "Modelo G 04 s 128GB",
      "Cámara posterior de 16 MP",
      "Duración batería 1 - 2 dias",
      "Sistema operativo Android 11"
    ]
  },
  {
    id: 7,
    name: "Sistema de Audio SafoSound",
    category: "audio",
    description: "Altavoces inteligentes con calidad de sonido premium y conectividad multipunto.",
    image: "/images/products/audio-system.jpg",
    features: [
      "Sonido envolvente de 360°",
      "Conectividad Bluetooth 5.0 y WiFi",
      "Controles por voz integrados",
      "Sincronización con múltiples dispositivos",
      "Diseño elegante y compacto"
    ]
  },
  {
    id: 8,
    name: "Router WiFi SafoConnect",
    category: "networking",
    description: "Conectividad de alta velocidad con gestión inteligente de red y máxima cobertura.",
    image: "/images/products/router.jpg",
    features: [
      "Tecnología WiFi 6 (802.11ax)",
      "Velocidad combinada de hasta 5.4 Gbps",
      "Control parental avanzado",
      "Optimización automática de red",
      "8 antenas de alta ganancia"
    ]
  }
];

export default products;