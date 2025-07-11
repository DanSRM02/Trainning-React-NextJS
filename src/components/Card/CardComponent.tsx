"use client";

import React from 'react';
import { CardProps } from "./types/CardTypes";

// Función para convertir el puntaje de seguridad a un nivel (0-4) para el CSS
const getLevelFromScore = (score: number | undefined): number => {
  if (score === undefined || score < 1) return 0;
  if (score <= 25) return 1;
  if (score <= 50) return 2;
  if (score <= 75) return 3;
  return 4;
};

// El nombre del componente ahora coincide con el nombre del archivo.
export const CardComponent = (props: CardProps) => {
  // Lógica simplificada: si no hay caracteres, no se muestra nada.
  // La página principal se encarga de mostrar el mensaje inicial si es necesario.
  if (props.CharNumber === undefined || props.CharNumber === 0) {
    return null; // No renderiza nada si no hay contraseña
  }

  const currentLevel = getLevelFromScore(props.SegurityLevel);

  return (
    // Se añade la clase para que los estilos futuristas se apliquen
    <div className="feedback-card">
      <p>Characters: {props.CharNumber}</p>
      <p>Lowercase Letters: {props.LowerCaseNumber}</p>
      <p>Uppercase Letters: {props.UpperCaseNumber}</p>
      <p>Numbers: {props.NumbersAmount}</p>
      <p>Special Characters: {props.SpecialCharNumber}</p>
      <p>Security Level:</p>
      <progress
        id="password-strength"
        value={props.SegurityLevel}
        max="100"
        // Atributo clave para que el CSS cambie el color de la barra
        data-level={currentLevel}
      >
        {props.SegurityLevel}%
      </progress>
    </div>
  );
};
