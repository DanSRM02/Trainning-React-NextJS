export const enum SecurityLevel {
  none = 0,
  low = 30,
  medium = 50,
  high = 70,
  extreme = 100,
}

export type CardProps = {
  charNumber: number;
  specialCharNumber: number;
  upperCaseNumber: number;
  lowerCaseNumber: number;
  numbersAmount: number;
  securityLevel: SecurityLevel;
};
