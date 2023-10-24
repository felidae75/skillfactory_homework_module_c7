import { reverseString } from "../../utils/reverseString";

describe('test reverseString function', () => {
    it('should reverse string', () => {
        expect(reverseString('123')).toBe('321');
        expect(reverseString('cats')).toBe('stac');
        expect(reverseString('!?1')).toBe('1?!');
    });
});
