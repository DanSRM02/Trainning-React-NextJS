import React from 'react';

// Corregido: Exportamos el componente con el nombre 'Footer'
// para que coincida con la importación en layout.tsx
export const Footer = () => {
  return (
    // Aplicamos la clase que ya definimos en globals.css
    <footer className="futuristic-footer">
      &copy; 2025 - PROYECTO DE SEGURIDAD
    </footer>
  );
};
