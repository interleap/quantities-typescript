export class Metre {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    add(metre: Metre): Metre {
        return new Metre(metre.value + this.value)
    }
}
