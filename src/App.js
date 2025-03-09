import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductCatalog from './components/ProductCatalog';
import Contact from './components/Contact';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import CookiePolicy from './components/CookiePolicy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ProductCatalog />} />
              <Route path="/productos/categoria/:categoryId" element={<ProductCatalog />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/privacidad" element={<PrivacyPolicy />} />
              <Route path="/terminos" element={<TermsAndConditions />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;