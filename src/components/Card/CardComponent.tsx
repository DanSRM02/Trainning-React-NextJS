"use client";

import { CardProps } from "./types/CardTypes";
import { useState } from "react";

export const PasswordFeedback = (props: CardProps) => {
  const [init, Setinit] = useState(true);

  const CardProps = props;

  if (!CardProps) {
    Setinit(false);
  }

  return init ? (
    RenderFeedback(CardProps)
  ) : (
    <h2>ingrese una contraseña para iniciar</h2>
  );
};

function RenderFeedback({
  CharNumber,
  LowerCaseNumber,
  NumbersAmount,
  SegurityLevel,
  SpecialCharNumber,
  UpperCaseNumber,
}: CardProps) {
  return (
    <div>
      <p>Characters: {CharNumber}</p>
      <p>Lowercase Letters: {LowerCaseNumber}</p>
      <p>Uppercase Letters: {UpperCaseNumber}</p>
      <p>Numbers: {NumbersAmount}</p>
      <p>Special Characters: {SpecialCharNumber}</p>
      <p>Security Level:</p>
      <progress id="file" value={SegurityLevel} max="100">
        {SegurityLevel}
      </progress>
    </div>
  );
}
