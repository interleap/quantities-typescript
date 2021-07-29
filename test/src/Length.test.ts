import { Length, UNIT } from '../../src/Length'
describe('Length Addition Test', () => {
    it("should be able to add to another length in metres", () => {
        const lengthInMetres = new Length(4.0, UNIT.METRE);
        expect(JSON.stringify(lengthInMetres.add(new Length(3.0, UNIT.METRE)))).toBe(JSON.stringify(new Length(7.0, UNIT.METRE)))
    })

    it("should be able to add metres to centimetres", () => {
        const length1 = new Length(3.0, UNIT.METRE);
        const length2 = new Length(50.0, UNIT.CENTIMETRE);
        expect(JSON.stringify(length1.add(length2))).toStrictEqual(JSON.stringify(new Length(3.5, UNIT.METRE)))
    })

    it("should be able to convert metres to centimetres", () => {
        expect(JSON.stringify(new Length(3.3, UNIT.METRE).to(UNIT.CENTIMETRE))).toBe(JSON.stringify(new Length(330.0, UNIT.CENTIMETRE)))
    })

    it("should be able to convert centimetres to metres", () => {
        expect(JSON.stringify(new Length(550.0, UNIT.CENTIMETRE).to(UNIT.METRE))).toBe(JSON.stringify(new Length(5.50, UNIT.METRE)))
    })
})