// src/utils/animations.js
import { useEffect } from 'react';

// Función para detectar cuándo un elemento está en el viewport
export const useIntersectionObserver = (targetRef, callback, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, callback, options]);
};

// Animación de fade-in para elementos al hacer scroll
export const fadeInOnScroll = (element, delay = 0) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
  element.style.transitionDelay = `${delay}s`;

  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 100);
};