// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../style-sheet/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="footer-logo">
            <h2>Safonic<span>Platform</span></h2>
            <p>Soluciones tecnológicas innovadoras para empresas y hogares modernos.</p>
          </div>
          <div className="footer-contact">
            <h3>Contáctanos</h3>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>Av. Tecnológica 1234, Ciudad Innovación</span>
              </li>
              <li>
                <FaPhone />
                <span>+52 55 1234 5678</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@safonicplatform.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h3>Navegación</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Productos</h3>
            <ul>
              <li><Link to="/productos#led">Luces LED</Link></li>
              <li><Link to="/productos#smartwatches">Relojes Inteligentes</Link></li>
              <li><Link to="/productos#smartphones">Celulares</Link></li>
              <li><Link to="/productos#tools">Herramientas</Link></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
              <li><Link to="/terminos">Términos y Condiciones</Link></li>
              <li><Link to="/cookies">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="social-links">
            <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
              <FaFacebook />
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
              <FaInstagram />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
              <FaLinkedin />
            </motion.a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} SafonicPlatform. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;