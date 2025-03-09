import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';

import lucesLedHogar from '../images/blog/blog-luces-led-hogar.jpg';
import seguridadHogar from '../images/blog/blog-seguridad-hogar.jpg';
import audioMultiroom from '../images/blog/blog-audio-multiroom.jpg';
import audioInalambrico from '../images/blog/blog-audio-inalambrico.jpg';
import herramientasProfesionales from '../images/blog/blog-herramientas-profesionales.jpg';
import blogIluminacióninteligente from '../images/blog/blog-iluminación-inteligente.jpg';

import '../style-sheet/Blog.css';

// Datos de ejemplo para el blog
const blogPosts = [
  {
    id: 1,
    title: 'Cómo elegir las mejores luces LED para tu hogar',
    slug: 'como-elegir-luces-led-hogar',
    excerpt: 'Descubre los factores clave a considerar al seleccionar iluminación LED para diferentes espacios de tu casa y maximiza la eficiencia energética.',
    content: 'Contenido completo del artículo...',
    category: 'Iluminación',
    author: 'Carlos Rodríguez',
    date: '2023-10-15',
    readTime: '5 min',
    image: lucesLedHogar,
    featured: true
  },
  {
    id: 2,
    title: 'Sistemas de audio inalámbricos: Guía completa',
    slug: 'sistemas-audio-inalambricos-guia',
    excerpt: 'Comparativa de los mejores sistemas de audio inalámbricos del mercado y cómo integrarlos perfectamente en tu hogar inteligente.',
    content: 'Contenido completo del artículo...',
    category: 'Audio',
    author: 'Ana Martínez',
    date: '2023-09-28',
    readTime: '8 min',
    image: audioInalambrico,
    featured: false
  },
  {
    id: 3,
    title: 'Seguridad en el hogar: Cámaras y sensores inteligentes',
    slug: 'seguridad-hogar-camaras-sensores',
    excerpt: 'Aprende a crear un sistema de seguridad robusto para tu hogar utilizando la última tecnología en cámaras y sensores inteligentes.',
    content: 'Contenido completo del artículo...',
    category: 'Seguridad',
    author: 'Miguel Ángel Torres',
    date: '2023-09-10',
    readTime: '6 min',
    image: seguridadHogar,
    featured: true
  },
  {
    id: 4,
    title: 'Herramientas tecnológicas para profesionales',
    slug: 'herramientas-tecnologicas-profesionales',
    excerpt: 'Descubre las herramientas y equipos tecnológicos que todo profesional moderno debería tener para optimizar su trabajo diario.',
    content: 'Contenido completo del artículo...',
    category: 'Herramientas',
    author: 'Laura Gómez',
    date: '2023-08-22',
    readTime: '7 min',
    image: herramientasProfesionales,
    featured: false
  },
  {
    id: 5,
    title: 'Tendencias en iluminación inteligente',
    slug: 'tendencias-iluminacion-inteligente-2023',
    excerpt: 'Análisis de las últimas tendencias en iluminación inteligente y cómo estas están transformando los espacios residenciales y comerciales.',
    content: 'Contenido completo del artículo...',
    category: 'Iluminación',
    author: 'Carlos Rodríguez',
    date: '2023-08-05',
    readTime: '4 min',
    image: blogIluminacióninteligente,
    featured: false
  },
  {
    id: 6,
    title: 'Cómo configurar un sistema de audio multiroom',
    slug: 'configurar-sistema-audio-multiroom',
    excerpt: 'Guía paso a paso para configurar un sistema de audio que funcione perfectamente en múltiples habitaciones de tu hogar.',
    content: 'Contenido completo del artículo...',
    category: 'Audio',
    author: 'Ana Martínez',
    date: '2023-07-18',
    readTime: '9 min',
    image: audioMultiroom,
    featured: true
  }
];

// Extraer categorías únicas de los posts
const categories = [...new Set(blogPosts.map(post => post.category))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Filtrar posts basados en búsqueda y categoría
  useEffect(() => {
    let result = blogPosts;
    
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(result);
    setFeaturedPosts(blogPosts.filter(post => post.featured).slice(0, 3));
  }, [searchTerm, selectedCategory]);

  // Manejar cambio en la búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Manejar selección de categoría
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-CO', options);
  };

  return (
    <>
      <Helmet>
        <title>Blog | Safonic Colombia</title>
        <meta name="description" content="Blog de Safonic Colombia. Artículos sobre tecnología, iluminación, audio, seguridad y más." />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <motion.div 
            className="blog-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1>Blog de Safonic</h1>
            <p>Descubre las últimas tendencias y consejos sobre tecnología para tu hogar y negocio</p>
            
            <div className="blog-search">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Buscar artículos..." 
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {featuredPosts.length > 0 && !searchTerm && !selectedCategory && (
        <section className="featured-posts">
          <div className="container">
            <h2 className="section-title">Artículos Destacados</h2>
            
            <motion.div 
              className="featured-posts-grid"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {featuredPosts.map(post => (
                <motion.div 
                  key={post.id} 
                  className="featured-post-card"
                  variants={fadeIn}
                >
                  <div className="featured-post-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="featured-post-content">
                    <span className="post-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span><FaUser /> {post.author}</span>
                      <span><FaCalendarAlt /> {formatDate(post.date)}</span>
                      <span><FaClock /> {post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Leer más
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <section className="blog-main">
        <div className="container">
          <div className="blog-container">
            <div className="blog-content">
              <div className="blog-header">
                <h2 className="section-title">
                  {selectedCategory ? `Artículos de ${selectedCategory}` : 'Todos los Artículos'}
                </h2>
                <p className="results-count">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
                </p>
              </div>

              {filteredPosts.length > 0 ? (
                <motion.div 
                  className="blog-posts-grid"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {filteredPosts.map(post => (
                    <motion.div 
                      key={post.id} 
                      className="blog-post-card"
                      variants={fadeIn}
                    >
                      <div className="post-image">
                        <img src={post.image} alt={post.title} />
                        <span className="post-category"><FaTag /> {post.category}</span>
                      </div>
                      <div className="post-content">
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="post-meta">
                          <span><FaUser /> {post.author}</span>
                          <span><FaCalendarAlt /> {formatDate(post.date)}</span>
                          <span><FaClock /> {post.readTime}</span>
                        </div>
                        <Link to={`/blog/${post.slug}`} className="read-more">
                          Leer más
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="no-results">
                  <h3>No se encontraron artículos</h3>
                  <p>Intenta con otra búsqueda o categoría.</p>
                </div>
              )}
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-widget categories-widget">
                <h3>Categorías</h3>
                <ul>
                  {categories.map(category => (
                    <li 
                      key={category} 
                      className={selectedCategory === category ? 'active' : ''}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                      <span className="post-count">
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget recent-posts-widget">
                <h3>Artículos Recientes</h3>
                <ul>
                  {blogPosts
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 5)
                    .map(post => (
                      <li key={post.id}>
                        <Link to={`/blog/${post.slug}`}>
                          <div className="recent-post-image">
                            <img src={post.image} alt={post.title} />
                          </div>
                          <div className="recent-post-info">
                            <h4>{post.title}</h4>
                            <span><FaCalendarAlt /> {formatDate(post.date)}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog; 