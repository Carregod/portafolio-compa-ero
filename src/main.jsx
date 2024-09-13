import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Busca el contenedor con id "root"
const rootElement = document.getElementById('root');
console.log(rootElement)

if (rootElement) {
  // Crea el root de React y renderiza la aplicación
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("No se encontró el elemento root");
}
