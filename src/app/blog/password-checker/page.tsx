"use client";

import React, { ChangeEvent, useState } from "react";
import { PasswordFeedback } from "@/components/Card";
import { FormComponent } from "@/components/form";

import {
  lowerCaseRegExp,
  numbersCharactersRegExp,
  specialCharactersRegExp,
  uppercaseRegExp,
} from "@/utils/data/regexp";
import { calculatePasswordStrength, getSecurityLevelFromScore } from "@/utils/logic";
import { charactersInPasswordType } from "@/utils/types/charactersInPasswordType";
import { SecurityLevel } from "@/components/Card/types/CardTypes";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [charactersInPassword, setCharactersInPassword] =
    useState<charactersInPasswordType>();

  const handleValuePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const calculateCharacterPassword = (
    password: string
  ): Omit<charactersInPasswordType, "securityLevel"> => {
    const upperCase = password.match(uppercaseRegExp)?.length || 0;
    const lowerCase = password.match(lowerCaseRegExp)?.length || 0;
    const totalLength = password.length;
    const numbersAmount = password.match(numbersCharactersRegExp)?.length || 0;
    const specialCharacters =
      password.match(specialCharactersRegExp)?.length || 0;

    return {
      totalLength,
      upperCase,
      lowerCase,
      numbersAmount,
      specialCharacters,
    };
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

  const Inputs = [
    <input
      key="password-input"
      type="password"
      placeholder="Enter your password"
      required
      onChange={handleValuePassword}
    />,
  ];

  return (
    <>
      <FormComponent
        HandleClickButton={handleClickButton}
        Inputs={Inputs}
        ButtonText="Check Your Password"
        Title="CHECKER"
      />
      
      <PasswordFeedback
        CharNumber={charactersInPassword?.totalLength || 0}
        LowerCaseNumber={charactersInPassword?.lowerCase || 0}
        UpperCaseNumber={charactersInPassword?.upperCase || 0}
        NumbersAmount={charactersInPassword?.numbersAmount || 0}
        SpecialCharNumber={charactersInPassword?.specialCharacters || 0}
        SegurityLevel={charactersInPassword?.securityLevel || SecurityLevel.none}
      />
    </>
  );
}

export default PasswordChecker;
