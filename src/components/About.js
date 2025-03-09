// src/components/About/About.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake, FaRocket, FaArrowRight } from 'react-icons/fa';
import '../style-sheet/About.css';

import nuestraHistoria from '../images/about/nuestra-historia.jpg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-header">
        <div className="container">
          <h1>Sobre Nosotros</h1>
          <p>Conoce más sobre Safonic y nuestra misión de ofrecer soluciones tecnológicas innovadoras.</p>
        </div>
      </div>

      <section className="about-intro section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Nuestra Historia</h2>
              <p>
                Safonic nació en 2018 con una visión clara: hacer que la tecnología avanzada sea accesible para empresas y hogares por igual. Comenzamos como una pequeña empresa con grandes ideas y hemos crecido hasta convertirnos en un referente en soluciones tecnológicas innovadoras.
              </p>
              <p>
                Lo que nos distingue es nuestro compromiso con la calidad y el servicio personalizado. Cada producto que ofrecemos ha sido cuidadosamente seleccionado para asegurar la mejor experiencia para nuestros clientes.
              </p>
              
              <div className="values-list">
                <div className="value-item">
                  <FaCheckCircle />
                  <span>Innovación constante</span>
                </div>
                <div className="value-item">
                  <FaCheckCircle />
                  <span>Compromiso con la calidad</span>
                </div>
                <div className="value-item">
                  <FaCheckCircle />
                  <span>Atención personalizada</span>
                </div>
                <div className="value-item">
                  <FaCheckCircle />
                  <span>Soluciones a medida</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={nuestraHistoria} alt="Safonic Colombia Historia" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mission-vision section">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <FaRocket />
              </div>
              <h3>Nuestra Misión</h3>
              <p>
                Proporcionar soluciones tecnológicas innovadoras que mejoren la eficiencia y calidad de vida de nuestros clientes, ofreciendo productos de alta calidad y un servicio excepcional.
              </p>
            </motion.div>
            
            <motion.div
              className="vision-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <FaLightbulb />
              </div>
              <h3>Nuestra Visión</h3>
              <p>
                Ser reconocidos como líderes en la innovación tecnológica, marcando la diferencia en cada hogar y empresa con productos que simplifiquen y enriquezcan la vida diaria.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-subtitle">
            Contamos con profesionales apasionados por la tecnología y comprometidos con ofrecer las mejores soluciones a nuestros clientes.
          </p>
          
          <div className="team-grid">
            <motion.div
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="team-icon">
                <FaUsers />
              </div>
              <h3>Equipo Técnico</h3>
              <p>
                Ingenieros y técnicos especializados en las últimas tecnologías, siempre dispuestos a resolver cualquier duda o problema.
              </p>
            </motion.div>
            
            <motion.div
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="team-icon">
                <FaHandshake />
              </div>
              <h3>Atención al Cliente</h3>
              <p>
                Profesionales dedicados a brindar la mejor experiencia, asesorando en cada paso del proceso de selección e implementación.
              </p>
            </motion.div>
            
            <motion.div
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="team-icon">
                <FaLightbulb />
              </div>
              <h3>Innovación</h3>
              <p>
                Investigadores y desarrolladores que trabajan constantemente en identificar y seleccionar las tecnologías más innovadoras del mercado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>¿Necesitas ayuda para elegir el producto adecuado?</h2>
            <p>Nuestro equipo está preparado para brindarte la mejor asesoría y encontrar las soluciones ideales para ti.</p>
            <Link to="/productos" className="btn btn-primary">
              Ver Productos <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;