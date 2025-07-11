import React from "react";

export type FormContainerProps = {
  HandleClickButton: () => void;
  Inputs: React.ReactNode[];
  FormId?: string;
  Title?: string;
  ButtonText?: string;
};
