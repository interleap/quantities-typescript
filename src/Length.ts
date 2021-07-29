export class Length {
    private value: number;
    private unit: UNIT;
    constructor(value: number, unit: UNIT) {
        this.value = value;
        this.unit = unit;
    }

    add(length: Length): Length {
        let convertedValue;
        switch (length.unit) {
            case UNIT.CENTIMETRE: convertedValue = (length.value / 100.0); break;
            default: convertedValue = length.value
        }
        return new Length(convertedValue + this.value, UNIT.METRE)
    }
}


export enum UNIT {
    METRE, CENTIMETRE
}