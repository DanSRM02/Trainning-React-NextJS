import React from "react";
import { PasswordFeedback } from "@/components/Card";
import { FormComponent } from "@/components/form";
import { SegurityLevel } from "@/components/Card/types/CardTypes";

function PasswordChecker() {
  const Inputs = [
    <input type="password" placeholder="Enter your password" required />,
    <input type="password" placeholder="Confirm your password" required />,
  ];
  return (
    <>
      <FormComponent
        Inputs={Inputs}
        ButtonText="kdhvf"
        FormId="form1"
        Title="tisyh"
      />

      <PasswordFeedback
        CharNumber={10}
        LowerCaseNumber={2}
        UpperCaseNumber={2}
        NumbersAmount={3}
        SpecialCharNumber={1}
        SegurityLevel={SegurityLevel.medium}
      />
    </>
  );
}

export default PasswordChecker;
