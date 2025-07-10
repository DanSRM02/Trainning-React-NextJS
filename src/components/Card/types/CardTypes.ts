
export const enum SegurityLevel {
    low = 30, 
    medium = 50,
    high = 70,
    extreme = 100
}


export type CardProps = {
    CharNumber: number;

    SpecialCharNumber: number;

    UpperCaseNumber: number;

    LowerCaseNumber: number;

    NumbersAmount: number;

    SegurityLevel: SegurityLevel;
}