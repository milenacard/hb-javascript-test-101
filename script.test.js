import {
    generateRandomColor,
    //filterNegativeNumbers,
    //functionalFilterNegativeNumbers,
    // mapNumbersIntoStrings,
    //functionalMapNumbersIntoStrings,
    //printType,
    //isPalindrome,
    //Person,
    //printOutPersonAge
} from './script.js';

describe('generateRandomColor', () => {
    it('should have "r", "g" and "b" as properties with numbers as values', () => {
        expect(generateRandomColor()).toMatchObject(expect.objectContaining({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }));
    });
});