import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PortafolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Mi Hoja de Vida" element={<AboutPage />} />
      <Route path="/Portafolio Servicios Profesionales" element={<PortafolioPage />} />
      <Route path="/Contactame" element={<ContactPage/>} />
    </Routes>
  );
};

export default AppRoutes;
