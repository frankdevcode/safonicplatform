import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaCalendarAlt, FaUser, FaTag, FaClock, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../style-sheet/BlogPostDetail.css';
import lucesLedHogar from '../images/blog/blog-luces-led-hogar.jpg';
import seguridadHogar from '../images/blog/blog-seguridad-hogar.jpg';
import audioMultiroom from '../images/blog/blog-audio-multiroom.jpg';
import audioInalambrico from '../images/blog/blog-audio-inalambrico.jpg';
import herramientasProfesionales from '../images/blog/blog-herramientas-profesionales.jpg';
import blogIluminacióninteligente from '../images/blog/blog-iluminación-inteligente.jpg';

// Datos de ejemplo para el blog (estos datos normalmente vendrían de una API o base de datos)
// En una aplicación real, estos datos se cargarían desde un backend
const blogPosts = [
  {
    id: 1,
    title: 'Cómo elegir las mejores luces LED para tu hogar',
    slug: 'como-elegir-luces-led-hogar',
    excerpt: 'Descubre los factores clave a considerar al seleccionar iluminación LED para diferentes espacios de tu casa y maximiza la eficiencia energética.',
    content: `
      <p>La iluminación LED ha revolucionado la forma en que iluminamos nuestros hogares, ofreciendo mayor eficiencia energética, durabilidad y opciones de personalización. Sin embargo, con tantas opciones disponibles en el mercado, elegir las luces LED adecuadas puede resultar abrumador. En esta guía, te ayudaremos a tomar decisiones informadas para cada espacio de tu hogar.</p>
      
      <h2>Comprendiendo la temperatura de color</h2>
      <p>La temperatura de color se mide en Kelvin (K) y determina si la luz aparecerá más cálida o más fría:</p>
      <ul>
        <li><strong>2700K-3000K (Luz cálida):</strong> Ideal para salas de estar, dormitorios y espacios donde deseas crear un ambiente acogedor y relajante.</li>
        <li><strong>3500K-4100K (Luz neutra):</strong> Perfecta para cocinas, oficinas en casa y áreas de trabajo donde necesitas un equilibrio entre comodidad y funcionalidad.</li>
        <li><strong>5000K-6500K (Luz fría):</strong> Recomendada para garajes, áreas de seguridad y espacios donde necesitas máxima visibilidad y concentración.</li>
      </ul>
      
      <h2>Considerando el índice de reproducción cromática (CRI)</h2>
      <p>El CRI indica qué tan bien una fuente de luz muestra los colores reales de los objetos. Para uso doméstico, busca luces LED con un CRI de al menos 80. Para espacios donde la precisión del color es importante (como estudios de arte o cocinas), considera opciones con CRI de 90 o superior.</p>
      
      <h2>Calculando los lúmenes necesarios</h2>
      <p>Los lúmenes miden el brillo de una bombilla. Aquí hay una guía general para diferentes espacios:</p>
      <ul>
        <li><strong>Sala de estar:</strong> 1,500-3,000 lúmenes</li>
        <li><strong>Cocina:</strong> 3,000-6,000 lúmenes</li>
        <li><strong>Dormitorio:</strong> 1,000-2,000 lúmenes</li>
        <li><strong>Baño:</strong> 1,500-3,000 lúmenes</li>
        <li><strong>Oficina en casa:</strong> 2,000-4,000 lúmenes</li>
      </ul>
      
      <h2>Tipos de luces LED para diferentes espacios</h2>
      
      <h3>Cocina</h3>
      <p>Para la cocina, considera una combinación de iluminación general (downlights empotrados) con temperatura de color neutra (3500K-4000K) y luces de tarea bajo los gabinetes para iluminar las superficies de trabajo. Las tiras LED son excelentes para iluminar debajo de los gabinetes y crear un ambiente acogedor.</p>
      
      <h3>Sala de estar</h3>
      <p>Opta por una iluminación en capas: luces ambientales generales (como downlights o plafones), iluminación de acento para destacar obras de arte o características arquitectónicas, y luces de tarea para actividades como la lectura. Una temperatura de color cálida (2700K-3000K) creará un ambiente acogedor.</p>
      
      <h3>Dormitorio</h3>
      <p>La iluminación del dormitorio debe ser versátil. Considera luces principales regulables, lámparas de noche con temperatura de color cálida, y quizás tiras LED detrás del cabecero para crear un ambiente relajante. Evita las luces LED con alto contenido de luz azul antes de dormir, ya que pueden interferir con tu ciclo de sueño.</p>
      
      <h2>Conclusión</h2>
      <p>Al elegir las luces LED para tu hogar, considera la temperatura de color, el CRI, los lúmenes necesarios y el tipo de iluminación adecuado para cada espacio. Invierte en calidad para garantizar durabilidad y rendimiento a largo plazo. Con las opciones correctas, puedes crear ambientes personalizados que mejoren tanto la funcionalidad como la estética de tu hogar, mientras reduces tu consumo de energía.</p>
    `,
    category: 'Iluminación',
    author: 'Carlos Rodríguez',
    date: '2023-10-15',
    readTime: '5 min',
    image: lucesLedHogar,
    featured: true,
    relatedPosts: [5, 3]
  },
  {
    id: 2,
    title: 'Sistemas de audio inalámbricos: Guía completa',
    slug: 'sistemas-audio-inalambricos-guia',
    excerpt: 'Comparativa de los mejores sistemas de audio inalámbricos del mercado y cómo integrarlos perfectamente en tu hogar inteligente.',
    content: `
      <p>Los sistemas de audio inalámbricos han transformado la forma en que disfrutamos de la música y otros contenidos de audio en nuestros hogares. Con la eliminación de cables antiestéticos y la adición de funciones inteligentes, estos sistemas ofrecen una experiencia de audio superior con mayor flexibilidad y comodidad.</p>
      
      <h2>Tipos de sistemas de audio inalámbricos</h2>
      
      <h3>Altavoces Bluetooth</h3>
      <p>Los altavoces Bluetooth son la opción más sencilla y accesible para audio inalámbrico. Son portátiles, fáciles de configurar y compatibles con prácticamente cualquier dispositivo moderno. Sin embargo, tienen limitaciones en términos de alcance (generalmente hasta 10 metros) y calidad de audio en comparación con otras opciones.</p>
      
      <h3>Altavoces Wi-Fi</h3>
      <p>Los altavoces Wi-Fi ofrecen mejor calidad de sonido que los Bluetooth y mayor alcance, ya que se conectan a tu red doméstica. Muchos sistemas permiten streaming de alta resolución y son ideales para configuraciones multiroom.</p>
      
      <h2>Factores a considerar al elegir un sistema</h2>
      
      <h3>Calidad de sonido</h3>
      <p>La calidad del sonido varía significativamente entre diferentes sistemas. Busca equipos con buena separación estéreo, claridad en los medios y agudos, y bajos potentes pero controlados.</p>
      
      <h3>Conectividad</h3>
      <p>Verifica qué protocolos de conectividad soporta el sistema: Bluetooth, Wi-Fi, AirPlay, Chromecast, y entradas físicas como HDMI o auxiliar para fuentes no inalámbricas.</p>
      
      <h2>Conclusión</h2>
      <p>Un buen sistema de audio inalámbrico puede transformar tu experiencia de entretenimiento en casa. Al elegir el sistema adecuado para tus necesidades, considera la calidad de sonido, las opciones de conectividad, la facilidad de uso y la compatibilidad con tus dispositivos existentes.</p>
    `,
    category: 'Audio',
    author: 'Ana Martínez',
    date: '2023-09-28',
    readTime: '8 min',
    image: audioInalambrico,
    featured: false,
    relatedPosts: [6, 1]
  },
  {
    id: 3,
    title: 'Seguridad en el hogar: Cámaras y sensores inteligentes',
    slug: 'seguridad-hogar-camaras-sensores',
    excerpt: 'Aprende a crear un sistema de seguridad robusto para tu hogar utilizando la última tecnología en cámaras y sensores inteligentes.',
    content: `
      <h2>Introducción a la seguridad inteligente</h2>
      <p>La seguridad del hogar ha evolucionado significativamente con la llegada de la tecnología inteligente. Los sistemas modernos ofrecen múltiples capas de protección y monitoreo en tiempo real.</p>
      
      <h2>Componentes esenciales de un sistema de seguridad</h2>
      <h3>1. Cámaras de vigilancia</h3>
      <p>Las cámaras modernas ofrecen:</p>
      <ul>
        <li>Resolución 4K para imágenes nítidas</li>
        <li>Visión nocturna avanzada</li>
        <li>Detección de movimiento con IA</li>
        <li>Audio bidireccional</li>
      </ul>

      <h3>2. Sensores inteligentes</h3>
      <p>Los sensores son fundamentales para:</p>
      <ul>
        <li>Detectar movimiento en áreas específicas</li>
        <li>Monitorear apertura de puertas y ventanas</li>
        <li>Detectar humo y fugas de gas</li>
        <li>Identificar inundaciones o fugas de agua</li>
      </ul>

      <h2>Integración y automatización</h2>
      <p>Un sistema de seguridad efectivo debe integrarse con otros dispositivos inteligentes del hogar para crear automatizaciones útiles:</p>
      <ul>
        <li>Encendido automático de luces cuando se detecta movimiento</li>
        <li>Notificaciones instantáneas en el teléfono</li>
        <li>Grabación automática ante eventos sospechosos</li>
        <li>Control remoto desde cualquier lugar</li>
      </ul>

      <h2>Conclusiones</h2>
      <p>La inversión en un sistema de seguridad inteligente no solo proporciona tranquilidad, sino que también puede aumentar el valor de tu propiedad y reducir costos de seguros.</p>
    `,
    category: 'Seguridad',
    author: 'Miguel Ángel Torres',
    date: '2023-09-10',
    readTime: '6 min',
    image: seguridadHogar,
    featured: true,
    relatedPosts: [5, 1]
  },
  {
    id: 4,
    title: 'Herramientas tecnológicas para profesionales',
    slug: 'herramientas-tecnologicas-profesionales',
    excerpt: 'Descubre las herramientas y equipos tecnológicos que todo profesional moderno debería tener para optimizar su trabajo diario.',
    content: `
      <h2>Herramientas esenciales para el profesional moderno</h2>
      <p>En la era digital actual, contar con las herramientas adecuadas puede marcar la diferencia en la productividad y eficiencia de cualquier profesional.</p>

      <h2>Equipos fundamentales</h2>
      <ul>
        <li>Computadoras de alto rendimiento</li>
        <li>Tablets para movilidad</li>
        <li>Sistemas de respaldo</li>
        <li>Accesorios ergonómicos</li>
      </ul>

      <h2>Software y aplicaciones</h2>
      <p>Las herramientas digitales más importantes incluyen:</p>
      <ul>
        <li>Suites de productividad</li>
        <li>Herramientas de colaboración</li>
        <li>Software especializado</li>
        <li>Aplicaciones de organización</li>
      </ul>

      <h2>Conclusiones</h2>
      <p>La inversión en herramientas tecnológicas adecuadas es fundamental para mantenerse competitivo en el mercado laboral actual.</p>
    `,
    category: 'Herramientas',
    author: 'Laura Gómez',
    date: '2023-08-22',
    readTime: '7 min',
    image: herramientasProfesionales,
    featured: false,
    relatedPosts: [1, 2]
  },
  {
    id: 5,
    title: 'Tendencias en iluminación inteligente',
    slug: 'tendencias-iluminacion-inteligente-2023',
    excerpt: 'Análisis de las últimas tendencias en iluminación inteligente y cómo estas están transformando los espacios residenciales y comerciales.',
    content: `
      <h2>El futuro de la iluminación</h2>
      <p>La iluminación inteligente está revolucionando la forma en que interactuamos con nuestros espacios, ofreciendo control, eficiencia y personalización sin precedentes.</p>

      <h2>Principales tendencias</h2>
      <ul>
        <li>Control por voz y gestos</li>
        <li>Integración con IoT</li>
        <li>Eficiencia energética</li>
        <li>Personalización avanzada</li>
      </ul>

      <h2>Aplicaciones prácticas</h2>
      <p>Ejemplos de uso en diferentes espacios:</p>
      <ul>
        <li>Hogares inteligentes</li>
        <li>Oficinas modernas</li>
        <li>Espacios comerciales</li>
        <li>Áreas públicas</li>
      </ul>
    `,
    category: 'Iluminación',
    author: 'Carlos Rodríguez',
    date: '2023-08-05',
    readTime: '4 min',
    image: blogIluminacióninteligente,
    featured: false,
    relatedPosts: [1, 3]
  },
  {
    id: 6,
    title: 'Cómo configurar un sistema de audio multiroom',
    slug: 'configurar-sistema-audio-multiroom',
    excerpt: 'Guía paso a paso para configurar un sistema de audio que funcione perfectamente en múltiples habitaciones de tu hogar.',
    content: `
      <h2>Introducción al audio multiroom</h2>
      <p>Un sistema de audio multiroom permite disfrutar de música sincronizada en diferentes espacios de tu hogar, creando una experiencia sonora envolvente y versátil.</p>

      <h2>Componentes necesarios</h2>
      <ul>
        <li>Altavoces inalámbricos compatibles</li>
        <li>Router WiFi de alta velocidad</li>
        <li>Aplicación de control</li>
        <li>Fuentes de audio digital</li>
      </ul>

      <h2>Proceso de configuración</h2>
      <p>Pasos detallados para la instalación:</p>
      <ol>
        <li>Planificación de la ubicación</li>
        <li>Conexión a la red WiFi</li>
        <li>Configuración de zonas</li>
        <li>Sincronización de dispositivos</li>
      </ol>

      <h2>Recomendaciones de uso</h2>
      <p>Para obtener el mejor rendimiento:</p>
      <ul>
        <li>Optimización de la red WiFi</li>
        <li>Ubicación estratégica de altavoces</li>
        <li>Configuración de grupos de audio</li>
        <li>Mantenimiento regular</li>
      </ul>
    `,
    category: 'Audio',
    author: 'Ana Martínez',
    date: '2023-07-18',
    readTime: '9 min',
    image: audioMultiroom,
    featured: true,
    relatedPosts: [2, 5]
  }
];

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Encontrar el post basado en el slug
  useEffect(() => {
    // Simular carga de datos
    setLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.slug === slug);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Obtener posts relacionados
        if (foundPost.relatedPosts && foundPost.relatedPosts.length > 0) {
          const related = foundPost.relatedPosts.map(id => 
            blogPosts.find(post => post.id === id)
          ).filter(Boolean);
          
          setRelatedPosts(related);
        }
      }
      
      setLoading(false);
    }, 500);
  }, [slug]);

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-CO', options);
  };

  // Compartir en redes sociales
  const shareUrl = window.location.href;
  const shareTitle = post ? post.title : 'Artículo de blog de Safonic Colombia';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando artículo...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Artículo no encontrado</h2>
        <p>Lo sentimos, el artículo que estás buscando no existe o ha sido movido.</p>
        <Link to="/blog" className="back-to-blog">
          <FaArrowLeft /> Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Safonic Colombia</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="blog-post-detail">
        <div className="post-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${post.image})` }}>
          <div className="container">
            <motion.div 
              className="post-hero-content"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Link to="/blog" className="back-to-blog">
                <FaArrowLeft /> Volver al blog
              </Link>
              <span className="post-category">{post.category}</span>
              <h1>{post.title}</h1>
              <div className="post-meta">
                <span><FaUser /> {post.author}</span>
                <span><FaCalendarAlt /> {formatDate(post.date)}</span>
                <span><FaClock /> {post.readTime} de lectura</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container">
          <div className="post-content-wrapper">
            <motion.div 
              className="post-content"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              <div className="post-tags">
                <span className="tag-label">Categoría:</span>
                <Link to={`/blog/categoria/${post.category.toLowerCase()}`} className="post-tag">
                  {post.category}
                </Link>
              </div>
              
              <div className="post-share">
                <span className="share-label">Compartir:</span>
                <div className="share-buttons">
                  <button onClick={shareOnFacebook} aria-label="Compartir en Facebook">
                    <FaFacebook />
                  </button>
                  <button onClick={shareOnTwitter} aria-label="Compartir en Twitter">
                    <FaTwitter />
                  </button>
                  <button onClick={shareOnLinkedIn} aria-label="Compartir en LinkedIn">
                    <FaLinkedin />
                  </button>
                  <button onClick={shareOnWhatsApp} aria-label="Compartir en WhatsApp">
                    <FaWhatsapp />
                  </button>
                </div>
              </div>
              
              <div className="post-author">
                <div className="author-avatar">
                  {/* Aquí iría la imagen del autor, por ahora usamos las iniciales */}
                  <div className="author-initials">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div className="author-info">
                  <h3>{post.author}</h3>
                  <p>Experto en tecnología y soluciones para el hogar inteligente. Escribe regularmente sobre las últimas tendencias en iluminación, audio y seguridad.</p>
                </div>
              </div>
            </motion.div>
            
            {relatedPosts.length > 0 && (
              <motion.div 
                className="related-posts"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <h2>Artículos relacionados</h2>
                <div className="related-posts-grid">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="related-post-card">
                      <Link to={`/blog/${relatedPost.slug}`} onClick={() => window.scrollTo(0, 0)}>
                        <div className="related-post-image">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
                            }}
                          />
                        </div>
                        <div className="related-post-content">
                          <h3>{relatedPost.title}</h3>
                          <div className="related-post-meta">
                            <span><FaCalendarAlt /> {formatDate(relatedPost.date)}</span>
                            <span><FaClock /> {relatedPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;