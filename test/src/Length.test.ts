import { Length } from '../../src/Length'
describe('Length Addition Test', () => {
    it("should be able to add to another length in metres", () => {
        const lengthInMeters = new Length(4.0);
        expect(lengthInMeters.add(new Length(3.0))).toStrictEqual(new Length(7.0))
    })
})