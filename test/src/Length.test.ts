import { UNIT, addLength, Length, getRelativeUnitMultiplier } from '../../src/Length'
describe('Length Addition Test', () => {
    it("should be able to add to another length in metres", () => {
        const length1: Length = { value: 4.0, unit: UNIT.METRE };
        const length2 = { value: 3.0, unit: UNIT.METRE }
        expect(addLength(length1, length2)).toStrictEqual({ value: 7.0, unit: UNIT.METRE })
    })

    it("should be able to add metres to centimeters", () => {
        const length1: Length = { value: 3.0, unit: UNIT.METRE };
        const length2 = { value: 50.0, unit: UNIT.CENTIMETRE }
        expect(addLength(length1, length2)).toStrictEqual({ value: 3.50, unit: UNIT.METRE })
    })

    it("should get relative multiplier to convert metres to centimetres", () => {
        expect(getRelativeUnitMultiplier(UNIT.METRE, UNIT.CENTIMETRE)).toBe(100.0)
    })

    it("should get relative multiplier to convert centimetres to metres", () => {
        expect(getRelativeUnitMultiplier(UNIT.CENTIMETRE, UNIT.METRE)).toBe(0.01)

    })

    it("should be able to add centimetres to metres", () => {
        const length1: Length = { value: 340.0, unit: UNIT.CENTIMETRE };
        const length2 = { value: 0.60, unit: UNIT.METRE }
        expect(addLength(length1, length2)).toStrictEqual({ value: 400.0, unit: UNIT.CENTIMETRE })
    })
})