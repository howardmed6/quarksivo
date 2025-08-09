import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';

// Importar páginas
import HomePage from './pages/HomePage';
import BestsellersPage from './pages/BestsellersPage';
import ArchivoPage from './pages/ArchivoPage';
import ColeccionesPage from './pages/ColeccionesPage';
import NosotrosPage from './pages/NosotrosPage';
import OfertasPage from './pages/OfertasPage';
import BlogPage from './pages/BlogPage';

// Importar estilos globales
import './styles/globals.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'bestsellers': return <BestsellersPage />;
      case 'archivo': return <ArchivoPage />;
      case 'colecciones': return <ColeccionesPage />;
      case 'nosotros': return <NosotrosPage />;
      case 'ofertas': return <OfertasPage />;
      case 'blog': return <BlogPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <TopBanner />
      <MainHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;