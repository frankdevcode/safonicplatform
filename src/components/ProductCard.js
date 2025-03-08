import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import '../style-sheet/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="catalog-product-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        
        <div className="product-features">
          <h4><FaInfoCircle /> Características:</h4>
          <ul>
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="product-actions">
          <button className="btn btn-primary">Solicitar Información</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;