"use client";

import React from "react";
import { CardProps } from "./types/CardTypes";

const getLevelFromScore = (score: number | undefined): number => {
  if (score === undefined || score < 1) return 0;
  if (score <= 25) return 1;
  if (score <= 50) return 2;
  if (score <= 75) return 3;
  return 4;
};

export const CardComponent = (props: CardProps) => {
  if (props.charNumber === undefined || props.charNumber === 0) {
    return null;
  }

  const currentLevel = getLevelFromScore(props.securityLevel);

  return (
    <div className="feedback-card">
      <p>Characters: {props.charNumber}</p>
      <p>Lowercase Letters: {props.lowerCaseNumber}</p>
      <p>Uppercase Letters: {props.upperCaseNumber}</p>
      <p>Numbers: {props.numbersAmount}</p>
      <p>Special Characters: {props.specialCharNumber}</p>
      <p>Security Level:</p>
      <progress
        id="password-strength"
        value={props.securityLevel}
        max="100"
        data-level={currentLevel}
      >
        {props.securityLevel}
      </progress>
    </div>
  );
};
