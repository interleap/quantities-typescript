export class Length {
    private value: number;
    private unit: UNIT;
    constructor(value: number, unit: UNIT) {
        this.value = value;
        this.unit = unit;
    }

    to = (targetUnit: UNIT): Length => new Length((this.value * this.unit) / targetUnit, targetUnit)

    add(length: Length): Length {
        const convertedValue = length.to(this.unit).value
        return new Length(convertedValue + this.value, UNIT.METRE)
    }
}


export enum UNIT {
    METRE = 100, CENTIMETRE = 1
}