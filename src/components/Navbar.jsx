// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="nav-item">Deyvis Cruz Carvajal</NavLink>
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/mi-hoja-de-vida" className="nav-item" activeClassName="active">Mi Hoja de Vida</NavLink>
        </li>
        <li>
          <NavLink to="/portafolio-servicios" className="nav-item" activeClassName="active">Portafolio Servicios Profesionales</NavLink>
        </li>
        <li>
          <NavLink to="/contactame" className="nav-item" activeClassName="active">Contáctame</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
