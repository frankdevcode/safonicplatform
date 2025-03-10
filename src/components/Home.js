import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaMicrochip, FaTools, FaHeadset } from 'react-icons/fa';
import products from '../data/products';
import '../style-sheet/Home.css';

import imagenBannerHome from '../images/home/banner-safonic-colombia.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tomamos algunos productos destacados
  const featuredProducts = products.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Tecnología innovadora para potenciar tu negocio</h1>
            <p>
              Explora nuestra selección de productos tecnológicos de alta calidad 
              diseñados para optimizar y modernizar tu negocio o hogar.
            </p>
            <div className="hero-buttons">
              <Link to="/productos" className="btn btn-primary">
                Ver productos <FaArrowRight />
              </Link>
              <Link to="/contacto" className="btn btn-secondary">
                Contáctanos
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={imagenBannerHome} alt="Tecnología Safonic" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <p className="section-subtitle">
            En Safonic nos distinguimos por ofrecer productos de la más alta calidad con un servicio personalizado.
          </p>

          <div className="features-grid">
            <motion.div
              className="feature-card"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Calidad garantizada</h3>
              <p>Todos nuestros productos cuentan con garantía y están fabricados con los más altos estándares de calidad.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <FaMicrochip />
              </div>
              <h3>Tecnología avanzada</h3>
              <p>Ofrecemos las últimas innovaciones tecnológicas para mantener tu negocio a la vanguardia del mercado.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <FaTools />
              </div>
              <h3>Soporte técnico</h3>
              <p>Contamos con un equipo especializado que te ayudará con la instalación y el mantenimiento de tus productos.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <FaHeadset />
              </div>
              <h3>Atención personalizada</h3>
              <p>Te brindamos asesoría especializada para encontrar las soluciones que mejor se adapten a tus necesidades.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section">
        <div className="container">
          <h2 className="section-title">Productos destacados</h2>
          <p className="section-subtitle">
            Conoce nuestra selección de productos más populares y descubre cómo pueden mejorar tu experiencia tecnológica.
          </p>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to={`/productos/categoria/${product.category}`} className="product-link">
                    Ver detalles <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="view-all-button">
            <Link to="/productos" className="btn btn-primary">
              Ver más productos <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Nueva sección */}   


      {/* Call to Action Section */}
      <section className="cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2> ¿Necesitas ayuda para elegir el producto adecuado?</h2>
            <p>Nuestro equipo está preparado para brindarte la mejor asesoría y encontrar las soluciones ideales para ti.</p>
            <Link to="/contacto" className="btn btn-primary">
              Contáctanos ahora <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;