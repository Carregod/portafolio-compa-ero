import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../src/routes/Routes.jsx';
import Navbar from './components/Navbar';
import Footer from './components/footer.jsx';
import './app.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
