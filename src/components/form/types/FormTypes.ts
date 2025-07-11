import React from "react";

export type FormContainerProps = {
  handleClickButton: () => void;
  inputs: React.ReactNode[];
  formId?: string;
  title?: string;
  buttonText?: string;
};
