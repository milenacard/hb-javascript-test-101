
/* Create a function that is capable of generate a random RGB color object. */
export function generateRandomColor(){
    let generateRgb;
    let red;
    let green;
    let blue;

    red =  Math.floor(Math.random() * (256 - 0)) + 0;
    green =  Math.floor(Math.random() * (256 - 0)) + 0;
    blue =  Math.floor(Math.random() * (256 - 0)) + 0;
    
    generateRgb = {
        r: red,
        g: green,
        b: blue
    }   

    return generateRgb;
}

/*Create a function that is capable of filtering out numbers less than 0 from an array of numbers. */
export function filterNegativeNumbers(arr){
    let newArray = [];

    for (var index = 0; index < arr.length; index++) {
        if (arr[index] >= 0) {
            newArray.push(arr[index]);
        }
    }
    return newArray;
}

/*Using function filter() */
export function functionalFilterNegativeNumbers(arr){

    return arr.filter(function(val){
        return val >= 0;
    });
}

/*Create a function that is capable of maping an array of numbers into strings. */
export function mapNumbersIntoStrings(arr){
    let newArray = [];

    for (var index = 0; index < arr.length; index++) {
        newArray.push(arr[index].toString());
    }
    return newArray;
}

/*Using function Map() */
export function functionalMapNumbersIntoStrings(arr){

    return arr.map(function(val){
        return val.toString();
    });
}

 /*Create a function that is capable of printing into the console the type of the passed variable. */
 export function printType(val){
        console.log(typeof(val));
    }

/*Create a function that is capable of identify if the passed string is a palindrome or not. It should return a boolean. */
export function isPalindrome(str){
     if(str.length < 2) {return true;}
         if(str.charAt(0) != str.charAt(str.length - 1)){return false;}
         return isPalindrome(str.substring(1, str.length - 1));
}

/*Using function split(), reverse(), join()*/
export function FuctionalIsPalindrome(str){
    return str === str.split('').reverse().join('');
}

/* Create a Class in Javascript that represents a person capable of having “name” and “age” as instance variables, and a method that prints out the name into the console.*/
export class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printName(){
        console.log(this.name);
    }
}

/*Create a function that is capable of receiving an instance of the Person Class and print into the console it’s age. */
export function printOutPersonAge(person){
    console.log(person.age);
}

