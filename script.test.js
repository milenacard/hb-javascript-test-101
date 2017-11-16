import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    FuctionalIsPalindrome,
    Person,
    printOutPersonAge
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
    
    it('should call console function', () => {
        const spy = jest.spyOn(global.console, 'log');
        printType(1);
        expect(spy).toHaveBeenCalled();
    });

    it('should print in console the string type of a variable', () => {
        const spy = jest.spyOn(global.console, 'log');
        printType('1');
        expect(spy).toHaveBeenLastCalledWith('string');
    });

    it('should print in console the float type of a variable', () => {
        const spy = jest.spyOn(global.console, 'log');
        printType(4)
        expect(spy).toHaveBeenLastCalledWith('number');
    });

    it('should print in console the object type of a variable', () => {
        const spy = jest.spyOn(global.console, 'log');
        printType(new Date());
        expect(spy).toHaveBeenLastCalledWith('object');
    });

    it('should print in console the function type of a variable', () => {
        const spy = jest.spyOn(global.console, 'log');
        printType(new Function("5+2"));
        expect(spy).toHaveBeenLastCalledWith('function');
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

describe('Person', () => {
    let personInstance;
    personInstance = new Person('John', 100);

    it('should return an instance with the correct values when calling it as a constructor', () => {
        const spy = jest.spyOn(global.console, 'log');
        personInstance.printName();
        expect(spy).toHaveBeenLastCalledWith('John');
    });
});

describe('printOutPersonAge', () => {
    let personInstance;
    personInstance = new Person('John', 100);

    it('should print in console the age of the given instance', () => {
        const spy = jest.spyOn(global.console, 'log');
        printOutPersonAge(new Person('John', 100));
        expect(spy).toHaveBeenLastCalledWith(100);
    });
});


