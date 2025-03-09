import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style-sheet/Header.css';
import logo from '../images/header/safonic-colombia-logo-black.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Cerrar menú al cambiar de ruta
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={logo}
              alt="Logo de Safonic Platform"
              className="logo-img"
            />
          </Link>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className={location.pathname === '/' ? 'active' : ''}
            >
              <Link to="/">Inicio</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className={location.pathname === '/productos' ? 'active' : ''}
            >
              <Link to="/productos">Productos</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className={location.pathname === '/nosotros' ? 'active' : ''}
            >
              <Link to="/nosotros">Nosotros</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className={location.pathname === '/contacto' ? 'active' : ''}
            >
              <Link to="/blog">Blog</Link>
            </motion.li>
          </ul>
        </nav>

        <div className="contact-btn">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            <Link to="/contacto">Contáctanos</Link>
          </motion.button>
        </div>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
