import { Metre } from '../../src/Metre'
describe('Length Addition Test', () => {
    it("should be able to add to another length in metres", () => {
        const lengthInMeters = new Metre(4.0);
        expect(lengthInMeters.add(new Metre(3.0))).toStrictEqual(new Metre(7.0))
    })
})