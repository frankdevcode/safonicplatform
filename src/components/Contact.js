// src/components/Contact/Contact.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import '../style-sheet/Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error cuando el usuario comienza a corregir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario a un servidor
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      
      // Resetear el formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Mostrar mensaje de éxito por 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-header">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos lo antes posible.</p>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <p>Utiliza cualquiera de los siguientes métodos para comunicarte con nuestro equipo de atención al cliente.</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Teléfono</h3>
                <p>+52 55 1234 5678</p>
                <p>Lunes a Viernes: 9am - 6pm</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@safonicplatform.com</p>
                <p>soporte@safonicplatform.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Dirección</h3>
                <p>Av. Tecnológica 1234</p>
                <p>Ciudad Innovación, CP 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Envíanos un Mensaje</h2>
          <p>Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
          
          {isSubmitted && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FaCheckCircle />
              <p>¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
            </motion.div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;