import React from "react";

type PasswordOptionsProps = {
  posiblePasswordOptions: string[];
};

const PasswordOptions = ({ posiblePasswordOptions }: PasswordOptionsProps) => {
  // Pequeña mejora: si no hay opciones, no mostramos nada.
  if (!posiblePasswordOptions || posiblePasswordOptions.length === 0) {
    return null;
  }

  return (
    // 1. Clase para la tarjeta de cristal
    <div className="password-options-card">
      
      {/* 2. Clase para el título */}
      <h2 className="options-title">Password Suggestions</h2>

      {/* 3. Clase para la lista */}
      <ul className="options-list">
        {posiblePasswordOptions.map((password, index) => (

          // 4. Clase para cada elemento de la lista
          <li key={index} className="option-item">
            {password}
          </li>

        ))}
      </ul>
    </div>
  );
};

export default PasswordOptions;