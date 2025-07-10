import { SecurityLevel } from "@/components/Card/types/CardTypes"

export type charactersInPasswordType = {
    totalLength: number,
    lowerCase: number,
    upperCase: number,
    numbersAmount: number,
    specialCharacters: number,
    securityLevel: SecurityLevel;
}