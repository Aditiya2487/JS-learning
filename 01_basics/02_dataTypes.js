"use strict"; //treat all JS code as newer version

//  alert("Hello Aditya"); similar to console.log but creates a popup

let name = "Aditya";
let age = 21;
let isApproved = false;

//number => 2 to pow 53
//bigint => larger than 2 to pow 53
//string => '', "", ``
//boolean => true/false
//undefined => value not assigned
//null => empty value
//symbol => unique identifiers

console.log(typeof name);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof null); //bug in JS, returns object instead of null
console.log(typeof undefined);
// console.table([name, age, isApproved]);

//Primitives are stored directly in the location that the variable accesses : 7 types of primitives
// String, Number, Boolean, Undefined, Null, Symbol, BigInt

//Reference types are objects and are stored as a reference (address) to a location in memory : // /Arrays, Functions, Objects
