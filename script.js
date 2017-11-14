
/* Create a function that is capable of generate a random RGB color object. */
function generateRandomNumber(){
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
function filterNegativeNumbers(arr){
    let newArray = [];

    for (var index = 0; index < arr.length; index++) {
        if (arr[index] >= 0) {
            newArray.push(arr[index]);
        }
    }
    return newArray;
}

/*Using function filter() */
function functionalFilterNegativeNumbers(arr){

    return arr.filter(function(val){
        return val >= 0;
    });
}

/*Create a function that is capable of maping an array of numbers into strings. */
function mapNumbersIntoStrings(arr){
    let newArray = [];

    for (var index = 0; index < arr.length; index++) {
        newArray.push(arr[index].toString());
    }
    return newArray;
}

/*Using function Map() */
function functionalMapNumbersIntoStrings(arr){

    return arr.map(function(val){
        return val.toString();
    });
}
 /*Create a function that is capable of printing into the console the type of the passed variable. */
function PrintType(val){
        return typeof(val);
    }

/*Create a function that is capable of identify if the passed string is a palindrome or not. It should return a boolean. */
function isPalindrome(str){
     if(str.length < 2) {return true;}
         if(str.charAt(0) != str.charAt(str.length - 1)){return false;}
         return isPalindrome(str.substring(1, str.length - 1));
}

/*Using function split(), reverse(), join()*/
function FuctionalIsPalindrome(str){
    return str === str.split('').reverse().join('');
}

/* Create a Class in Javascript that represents a person capable of having “name” and “age” as instance variables, and a method that prints out the name into the console.*/
class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printName(){
        console.log(this.name);
    }

    get Age(){
        return this.age();
    }
}

/*Create a function that is capable of receiving an instance of the Person Class and print into the console it’s age. */
function printOutPersonAge(person){
    console.log(person.age);
}

//Show result in console
console.log("Generate RGB Random: ")
console.log(generateRandomNumber());

console.log("Filter Negative Numbers - function pure: ")
console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(filterNegativeNumbers([4, 6, 5, 0, 34, 54, 7]));
console.log(filterNegativeNumbers([-4, -6, -5, 0, -34, -54, -7]));
console.log(filterNegativeNumbers([]));

console.log("Filter Negative Numbers - Function filter: ")
console.log(functionalFilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalFilterNegativeNumbers([4, 6, 5, 0, 34, 54, 7]));
console.log(functionalFilterNegativeNumbers([-4, -6, -5, 0, -34, -54, -7]));
console.log(functionalFilterNegativeNumbers([]));

console.log("Maping an array of numbers into strings ")
console.log(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));

console.log("Maping an array of numbers into strings - Function map:")
console.log(functionalMapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));

console.log("Printing into the console the type of the passed variable - function Typeof: ");
console.log("'1' is "+ PrintType('1'));
console.log("5.4 is "+ PrintType(5.4));
console.log("new Date() is "+ PrintType(new Date()));
console.log("new Function(5+2) is "+ PrintType(new Function("5+2")));

console.log("Returning if a string is a palindrome or not: ");
console.log(isPalindrome('deep'));
console.log(isPalindrome('deed'));
console.log(isPalindrome('anitalavalatina'));

console.log("Returning if a string is a palindrome or not: -Function split, reverse and join: ");
console.log(FuctionalIsPalindrome('deep'));
console.log(FuctionalIsPalindrome('deed'));
console.log(FuctionalIsPalindrome('anitalavalatina'));

console.log("Prints out the name of a object Person into the console: ");
const student = new Person('John', 25);
student.printName();

console.log("Prints out the age of a object Person into the console: ");
printOutPersonAge(student);
