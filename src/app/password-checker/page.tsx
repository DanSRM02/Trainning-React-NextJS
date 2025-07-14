"use client";

import React, { ChangeEvent, useState } from "react";
import { FormComponent } from "@/components/form";
import {
  lowerCaseRegExp,
  numbersCharactersRegExp,
  specialCharactersRegExp,
  uppercaseRegExp,
} from "@/utils/data/regexp";
import {
  calculateCharacterPassword,
  calculatePasswordStrength,
  getSecurityLevelFromScore,
} from "@/utils/logic";
import { charactersInPasswordType } from "@/utils/types/charactersInPasswordType";
import { SecurityLevel } from "@/components/Card/types/CardTypes";
import { CardComponent } from "@/components/Card";
import PasswordOptions from "@/components/Card/pasword-options";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [charactersInPassword, setCharactersInPassword] =
    useState<charactersInPasswordType>();

  const handleValuePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickButton = () => {
    const characterCounts = calculateCharacterPassword(password);

    const strengthScore = calculatePasswordStrength(password);

    const securityLevel = getSecurityLevelFromScore(strengthScore);

    setCharactersInPassword({
      ...characterCounts,
      securityLevel: securityLevel,
    });
  };

  const inputs = [
    <input
      key="password-input"
      type="password"
      placeholder="Enter your password"
      className="futuristic-input"
      required
      onChange={handleValuePassword}
    />,
  ];

  return (
    <>
      <FormComponent
        handleClickButton={handleClickButton}
        inputs={inputs}
        buttonText="Check Your Password"
        title="CHECKER"
      />

      <CardComponent
        charNumber={charactersInPassword?.totalLength || 0}
        lowerCaseNumber={charactersInPassword?.lowerCase || 0}
        upperCaseNumber={charactersInPassword?.upperCase || 0}
        numbersAmount={charactersInPassword?.numbersAmount || 0}
        specialCharNumber={charactersInPassword?.specialCharacters || 0}
        securityLevel={
          charactersInPassword?.securityLevel || SecurityLevel.none
        }
      />
      <PasswordOptions posiblePasswordOptions={["hola", "abc123", "asdd*123"]} />
    </>
  );
}

export default PasswordChecker;
