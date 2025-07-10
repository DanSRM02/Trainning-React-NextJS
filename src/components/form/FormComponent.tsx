import React from "react";
import { FormContainerProps } from "./types/FormTypes";

const InputsMap = (InputList: React.ReactNode[]) => {
  // He quitado la clase 'mb-4' para que el gap del formulario controle el espaciado
  return InputList.map((Input, index) => (
    <div key={index}> 
      {Input}
    </div>
  ));
};

export const FormComponent = ({
  HandleClickButton,
  Inputs,
  ButtonText,
  Title,
  FormId,
}: FormContainerProps) => {
  return (
    // 👇 1. Se añade la clase principal al formulario
    <form id={FormId} className="futuristic-form">
      {/* 👇 2. Se añade la clase al título */}
      <h2 className="form-title">{Title}</h2>
      {InputsMap(Inputs as React.ReactNode[])}
      <button type="button" onClick={HandleClickButton}>{ButtonText}</button>
    </form>
  );
};
