import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFilter, FaTimes } from 'react-icons/fa';
import products from '../data/products';
import ProductCard from './ProductCard';
import '../style-sheet/ProductCatalog.css';

const ProductCatalog = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Extracción de categorías única con useMemo para evitar recálculos innecesarios
  const categories = useMemo(() => {
    return ['all', ...new Set(products.map(product => product.category))];
  }, []);

  // Establecer la categoría activa basada en los parámetros de la URL
  useEffect(() => {
    if (categoryId && categories.includes(categoryId)) {
      setActiveCategory(categoryId);
    } else if (!categoryId) {
      setActiveCategory('all');
    }
    window.scrollTo(0, 0);
  }, [categoryId, categories]);

  // Filtrar productos por categoría
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);

  // Manejar cambio de categoría
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      navigate('/productos');
    } else {
      navigate(`/productos/categoria/${category}`);
    }
    setIsFilterOpen(false);
  };

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
                  onClick={() => handleCategoryChange(category)}
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
                onClick={() => handleCategoryChange('all')}
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