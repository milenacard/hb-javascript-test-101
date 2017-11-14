
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


function functionalFilterNegativeNumbers(arr){

    return arr.filter(function(val){
        return val >= 0;
    });
}

//Show result in console

console.log("Generate RGB Random: ")
console.log(generateRandomNumber());

console.log("Filter Negative Numbers - function pure: ")
console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(filterNegativeNumbers([4, 6, 5, 0, 34, 54, 7]));
console.log(filterNegativeNumbers([-4, -6, -5, 0, -34, -54, -7]));
console.log(filterNegativeNumbers([]));

console.log("Filter Negative Numbers - function filter: ")
console.log(functionalFilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalFilterNegativeNumbers([4, 6, 5, 0, 34, 54, 7]));
console.log(functionalFilterNegativeNumbers([-4, -6, -5, 0, -34, -54, -7]));
console.log(functionalFilterNegativeNumbers([]));