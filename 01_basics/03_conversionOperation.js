"use strict";
//type conversion
let score = "100";
console.log(typeof score); //string
score = Number(score); //explicit conversion
console.log(typeof score); //number
console.log(score + 1); //101
console.log(score);

let string = "1335aabbc";
console.log(typeof string); //string

let number = Number(string); //explicit conversion
console.log(typeof number); //number
console.log(number); //NaN

//NaN => not a number
//isNaN() => to check if value is NaN
console.log(isNaN(number)); //true
