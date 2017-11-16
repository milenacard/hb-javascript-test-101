import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    FuctionalIsPalindrome,
    //Person,
    //printOutPersonAge
} from './script.js';

describe('generateRandomColor', () => {
    const color = generateRandomColor();
    const {r, g, b} = color;

    it('should have "r", "g" and "b" defined', () => {
        expect(r).toBeDefined();
        expect(g).toBeDefined();
        expect(b).toBeDefined();
    });

    it('should have "r", "g" and "b" a number value between 0 and 255', () =>{
        expect(r).toBeGreaterThanOrEqual(0);
        expect(r).toBeLessThanOrEqual(255);
        expect(g).toBeGreaterThanOrEqual(0);
        expect(g).toBeLessThanOrEqual(255);
        expect(b).toBeGreaterThanOrEqual(0);
        expect(b).toBeLessThanOrEqual(255);
    });
});


describe('filterNegativeNumbers', () =>{
    const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    it('should show only positive numbers or zero of a numbers Array', () =>{
        expect(filterNegativeNumbers(arr)).toEqual([0, 1, 2, 3, 4, 5]);
        expect(functionalFilterNegativeNumbers(arr)).toEqual([0, 1, 2, 3, 4, 5]);
        expect(filterNegativeNumbers([0])).toEqual([0]);
        expect(functionalFilterNegativeNumbers([0])).toEqual([0]);
        expect(filterNegativeNumbers([-4, -6, -5, 0, -34, -54, -7])).toEqual([0]);
        expect(functionalFilterNegativeNumbers([-4, -6, -5, 0, -34, -54, -7])).toEqual([0]);
    });
});

describe('mapNumbersIntoStrings', () =>{
    const arr = [-1, 0, 1];

    it('should return a new array with strings', () => {
        expect(mapNumbersIntoStrings(arr)).toEqual(['-1', '0', '1']);
        expect(functionalMapNumbersIntoStrings(arr)).toEqual(['-1', '0', '1']);
    });
});

describe('printType', () => {

    it('should show the string type of a variable', () => {
        expect(printType('1')).toBe('string');
    });

    it('should show the float type of a variable', () => {
        expect(printType(4)).toBe('number');
    });

    it('should show the object type of a variable', () => {
        expect(printType(new Date())).toBe('object');
    });

    it('should show the function type of a variable', () => {
        expect(printType(new Function("5+2"))).toBe('function');
    });
});

describe('isPalindrome', () => {

    it('should returnig true the string is a palindrome', () => {
        expect(isPalindrome('deed')).toBe(true);
        expect(isPalindrome('anitalavalatina')).toBe(true);
        expect(FuctionalIsPalindrome('deed')).toBe(true);
        expect(FuctionalIsPalindrome('anitalavalatina')).toBe(true);
        
    });

    it('should returnig false the string is not a palindrome', () => {
        expect(isPalindrome('deep')).toBe(false);
        expect(isPalindrome('root')).toBe(false);
        expect(isPalindrome('rodar')).toBe(false);  
        expect(FuctionalIsPalindrome('deep')).toBe(false);
        expect(FuctionalIsPalindrome('root')).toBe(false);
        expect(FuctionalIsPalindrome('rodar')).toBe(false);       
    });
});


