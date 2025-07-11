import React from 'react';

// Este layout envuelve específicamente el contenido de la ruta /password-checker.
// Cumple con las instrucciones de tu compañero.
export default function PasswordCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Por ahora, este layout simplemente renderiza el contenido de la página.
  // Si en el futuro esta sección necesitara un submenú o una barra lateral,
  // se añadirían aquí.
  return (
    <div className="password-checker-container">
      {children}
    </div>
  );
}
