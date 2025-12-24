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

let string1 = null;
console.log(typeof string1); //string
let number1 = Number(string1); //explicit conversion
console.log(typeof number1); //number
console.log(number1); //0

let boolean = true;
console.log(typeof boolean); //boolean
let number2 = Number(boolean); //explicit conversion
console.log(typeof number2); //number
console.log(number2); //1

let string3 = undefined;
console.log(typeof string3); //undefined
let number3 = Number(string3); //explicit conversion
console.log(typeof number3); //number
console.log(number3); //NaN
