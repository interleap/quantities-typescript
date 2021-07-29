import { Length, UNIT } from '../../src/Length'
describe('Length Addition Test', () => {
    it("should be able to add to another length in metres", () => {
        const lengthInMetres = new Length(4.0, UNIT.METRE);
        expect(lengthInMetres.add(new Length(3.0, UNIT.METRE))).toStrictEqual(new Length(7.0, UNIT.METRE))
    })

    it("should be able to add metres to centimetres", () => {
        const length1 = new Length(3.0, UNIT.METRE);
        const length2 = new Length(50.0, UNIT.CENTIMETRE);
        expect(length1.add(length2)).toStrictEqual(new Length(3.5, UNIT.METRE))
    })
})