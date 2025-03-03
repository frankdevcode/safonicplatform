// src/components/ProductCatalog/ProductCatalog.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FaFilter, FaTimes } from 'react-icons/fa';
import products from '../data/products';
import ProductCard from './ProductCard';
import '../style-sheet/ProductCatalog.css';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const location = useLocation();

  // Extraer categorías únicas
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Filtrar productos por categoría
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);

  // Verificar si hay un hash en la URL para establecer la categoría inicial
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash && categories.includes(hash)) {
      setActiveCategory(hash);
    }
    
    window.scrollTo(0, 0);
  }, [location, categories]);

  // Traducir nombres de categorías para mostrar
  const getCategoryName = (category) => {
    const categoryNames = {
      'all': 'Todos',
      'led': 'Luces LED',
      'smartwatches': 'Relojes Inteligentes',
      'smartphones': 'Celulares',
      'tools': 'Herramientas',
      'security': 'Seguridad',
      'audio': 'Audio',
      'networking': 'Redes'
    };
    
    return categoryNames[category] || category;
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <motion.div
      className="product-catalog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="catalog-header">
        <div className="container">
          <h1>Nuestros Productos</h1>
          <p>Explora nuestra amplia gama de productos tecnológicos diseñados para mejorar tu experiencia digital.</p>
        </div>
      </div>

      <div className="container catalog-container">
        <button className="filter-toggle" onClick={toggleFilter}>
          {isFilterOpen ? <FaTimes /> : <FaFilter />} 
          {isFilterOpen ? 'Cerrar filtros' : 'Filtrar productos'}
        </button>

        <div className={`catalog-sidebar ${isFilterOpen ? 'active' : ''}`}>
          <h3>Categorías</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                >
                  {getCategoryName(category)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="catalog-products">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <h3>No se encontraron productos en esta categoría</h3>
              <button 
                className="btn btn-primary" 
                onClick={() => setActiveCategory('all')}
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCatalog;