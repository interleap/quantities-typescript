export class Length {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    add(length: Length): Length {
        return new Length(length.value + this.value)
    }
}
