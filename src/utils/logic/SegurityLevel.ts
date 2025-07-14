import { SecurityLevel } from "@/components/Card/types/CardTypes";
import { charactersInPasswordType } from "../types/charactersInPasswordType";
import { lowerCaseRegExp, numbersCharactersRegExp, specialCharactersRegExp, uppercaseRegExp } from "../data/regexp";

export function getSecurityLevelFromScore(score: number): SecurityLevel {
  if (score >= SecurityLevel.high) return SecurityLevel.high;
  if (score >= SecurityLevel.medium) return SecurityLevel.medium;
  if (score >= SecurityLevel.low) SecurityLevel.low;
  if (score > 0) return SecurityLevel.none;
  return SecurityLevel.none;
}

export const calculateCharacterPassword = (
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

export function calculatePasswordStrength(password: string): number {
  let score = 0;

  const uppercaseRegExp = /[A-Z]/;
  const lowercaseRegExp = /[a-z]/;
  const numbersRegExp = /[0-9]/;
  const specialCharsRegExp = /[^A-Za-z0-9]/;

  if (password.length >= 8) score += 10;
  if (password.length >= 12) score += 15;
  if (password.length >= 16) score += 15;

  const hasUppercase = uppercaseRegExp.test(password);
  const hasLowercase = lowercaseRegExp.test(password);
  const hasNumbers = numbersRegExp.test(password);
  const hasSpecialChars = specialCharsRegExp.test(password);

  let typesCount = 0;
  if (hasUppercase) typesCount++;
  if (hasLowercase) typesCount++;
  if (hasNumbers) typesCount++;
  if (hasSpecialChars) typesCount++;

  score += typesCount * 10;

  if (typesCount >= 3) {
    score += 15;
  }
  if (typesCount === 4) {
    score += 15;
  }

  return Math.min(score, 100);
}
