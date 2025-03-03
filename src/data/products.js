// src/data/products.js
const products = [
  {
    id: 1,
    name: "Luces LED Inteligentes",
    category: "led",
    description: "Iluminación inteligente controlable vía app con millones de colores y escenas personalizables.",
    image: "/images/products/led-lights.jpg",
    features: [
      "Control mediante aplicación móvil",
      "Compatible con asistentes de voz",
      "16 millones de colores",
      "Programación horaria",
      "Bajo consumo energético"
    ]
  },
  {
    id: 2,
    name: "Reloj Inteligente SafonicWatch",
    category: "smartwatches",
    description: "Monitorea tu salud y mantente conectado con notificaciones, llamadas y múltiples funciones deportivas.",
    image: "/images/products/smartwatches.jpg",
    features: [
      "Monitoreo cardíaco 24/7",
      "Resistente al agua IP68",
      "Batería de larga duración (hasta 7 días)",
      "Pantalla AMOLED de alta resolución",
      "Más de 100 modos deportivos"
    ]
  },
  {
    id: 3,
    name: "Smartphone SafonicX Pro",
    category: "smartphones",
    description: "Potente smartphone con cámara profesional, procesador de última generación y pantalla de alta resolución.",
    image: "/images/products/smartphones.jpg",
    features: [
      "Cámara de 108MP con estabilización óptica",
      "Procesador octa-core de 3.0GHz",
      "Pantalla AMOLED de 6.7 pulgadas",
      "Batería de 5000mAh con carga rápida",
      "Sistema operativo personalizado"
    ]
  },
  {
    id: 4,
    name: "Taladro Inalámbrico SafoDrill",
    category: "tools",
    description: "Herramienta de alta potencia con batería de larga duración para trabajos profesionales y domésticos.",
    image: "/images/products/drills.jpg",
    features: [
      "Motor sin escobillas para mayor eficiencia",
      "Batería intercambiable de 20V",
      "Dos velocidades ajustables",
      "Incluye maletín y accesorios",
      "Diseño ergonómico y ligero"
    ]
  },
  {
    id: 5,
    name: "Cerradura Digital SafoLock",
    category: "security",
    description: "Sistema de seguridad inteligente con múltiples métodos de acceso y registro de entradas.",
    image: "/images/products/digital-locks.jpg",
    features: [
      "Desbloqueo por huella, código y aplicación",
      "Alarma de manipulación integrada",
      "Batería de respaldo para emergencias",
      "Historial de acceso en tiempo real",
      "Instalación sencilla sin cableado"
    ]
  },
  {
    id: 6,
    name: "Cámara de Seguridad SafoVision",
    category: "security",
    description: "Vigilancia de alta definición con visión nocturna y detección inteligente de movimiento.",
    image: "/images/products/security-camera.jpg",
    features: [
      "Grabación en 4K Ultra HD",
      "Visión nocturna infrarroja hasta 30m",
      "Detección inteligente de personas",
      "Almacenamiento en la nube o local",
      "Audio bidireccional"
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