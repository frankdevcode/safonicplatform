// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../style-sheet/Footer.css';

// Importando logo de footer
import logo from '../images/footer/safonic-colombia-logo-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="footer-logo">
            <img src={logo} alt="Safonic Colombia Logo" className="footer-logo-img" />
            <p>Soluciones tecnológicas innovadoras para empresas y hogares modernos.</p>
          </div>
          <div className="footer-contact">
            <h3>Contáctanos</h3>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>Av. Tecnológica 123, Innovación</span>
              </li>
              <li>
                <FaPhone />
                <span>+57 317 628 29 79</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@safonic.com</span>
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
              <li><Link to="/productos/categoria/led">Luces LED</Link></li>
              <li><Link to="/productos/categoria/audio">Audio y Sonido</Link></li>
              <li><Link to="/productos/categoria/security">Seguridad y Vigilancia</Link></li>
              <li><Link to="/productos/categoria/tools">Herramientas y Equipos</Link></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/privacidad" target="_blank" rel="noopener noreferrer">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" target="_blank" rel="noopener noreferrer">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/cookies" target="_blank" rel="noopener noreferrer">
                  Política de Cookies
                </Link>
              </li>
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
            &copy; {new Date().getFullYear()} Safonic Colombia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;