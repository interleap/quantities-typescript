export enum UNIT {
    CENTIMETRE, METRE
}

export type Length = {
    value: number;
    unit: UNIT
}

const RELATIVE_UNITS_TO_CENTIMETRE: { [key: string]: number } = {
    CENTIMETRE: 1,
    METRE: 100
}

export const getRelativeUnitMultiplier = (from: UNIT, to: UNIT) => RELATIVE_UNITS_TO_CENTIMETRE[UNIT[from]] / RELATIVE_UNITS_TO_CENTIMETRE[UNIT[to]]

export const addLength = (length1: Length, length2: Length) => ({ value: length1.value + length2.value * getRelativeUnitMultiplier(length2.unit, length1.unit), unit: length1.unit })
