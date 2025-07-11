"use client";

import React, { useState } from "react";
import { CardComponent } from "@/components/Card";
import { FormComponent } from "@/components/form";
import { CardProps } from "@/components/Card/types/CardTypes";

// Lógica para analizar la contraseña en tiempo real
const analyzePassword = (password: string): CardProps => {
  const lower = (password.match(/[a-z]/g) || []).length;
  const upper = (password.match(/[A-Z]/g) || []).length;
  const numbers = (password.match(/[0-9]/g) || []).length;
  const special = password.length - lower - upper - numbers;

  let score = 0;
  if (password.length >= 8) score += 25;
  if (lower > 0) score += 10;
  if (upper > 0) score += 15;
  if (numbers > 0) score += 20;
  if (special > 0) score += 30;
  
  const finalScore = Math.min(100, score);

  return {
    CharNumber: password.length,
    LowerCaseNumber: lower,
    UpperCaseNumber: upper,
    NumbersAmount: numbers,
    SpecialCharNumber: special,
    SegurityLevel: finalScore,
  };
};

function PasswordCheckerPage() {
  const [feedback, setFeedback] = useState<CardProps | null>(null);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    if (newPassword === "") {
        setFeedback(null);
    } else {
        setFeedback(analyzePassword(newPassword));
    }
  };

  const Inputs = [
    <input
      key="password-input"
      type="password"
      placeholder="Enter your password..."
      onChange={handlePasswordChange}
      // 👇 AÑADIMOS ESTA CLASE DIRECTAMENTE AL INPUT 👇
      className="futuristic-input"
      required
    />,
  ];

  return (
    <>
      <FormComponent
        Inputs={Inputs}
        ButtonText="Verificar"
        FormId="form1"
        Title="Password Security"
      />
      {feedback && <CardComponent {...feedback} />}
    </>
  );
}

export default PasswordCheckerPage;
