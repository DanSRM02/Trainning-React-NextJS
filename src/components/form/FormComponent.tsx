import React from "react";
import { FormContainerProps } from "./types/FormTypes";

const InputsMap = (InputList: React.ReactNode[]) => {
  return InputList.map((Input, index) => (
    <div key={index} className="mb-4">
      {Input}
    </div>
  ));
};

export const FormComponent = ({
  Inputs,
  ButtonText,
  Title,
  FormId
}: FormContainerProps) => {
  return (
    <form id={FormId}>
      <h2>{Title}</h2>
      {InputsMap(Inputs as React.ReactNode[])}
      <button type="submit">{ButtonText}</button>;
    </form>
  );
};
