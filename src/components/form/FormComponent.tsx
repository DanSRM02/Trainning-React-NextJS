import React from "react";
import { FormContainerProps } from "./types/FormTypes";

const inputsMap = (inputList: React.ReactNode[]) => {  
  return inputList.map((Input, index) => (
    <div key={index}> 
      {Input}
    </div>
  ));
};

export const FormComponent = ({
  handleClickButton,
  inputs,
  buttonText,
  title,
  formId,
}: FormContainerProps) => {
  return (    
    <form id={formId} className="futuristic-form">      
      <h2 className="form-title">{title}</h2>
      {inputsMap(inputs as React.ReactNode[])}
      <button type="button" onClick={handleClickButton}>{buttonText}</button>
    </form>
  );
};
