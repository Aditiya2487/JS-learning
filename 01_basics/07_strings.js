const name = "Aditya";
const repoCount = 50;

console.log("Hello " + name + " , your repo count is " + repoCount);
console.log(`Hello ${name} , your repo count is ${repoCount}`); //String Interpolation (Modern Way  to include variables in strings using backticks) //Template Literals

const gameName = new String("Chess"); //String Object (Not recommended to use)
console.log(gameName);
console.log(typeof gameName); //object

// String Properties and Methods
console.log(gameName[0]); //Accessing first character 'C'
console.log(gameName.__proto__); //Prototype of String Object

console.log(gameName.length); //Length of the string
console.log(gameName.toUpperCase()); //Converts to Uppercase
console.log(gameName.toLowerCase()); //Converts to Lowercase
console.log(gameName.charAt(4)); //Accessing fifth character 's'
console.log(gameName.indexOf("e")); //Index of character 'e' which is 2
console.log(gameName.includes("ess")); //Checks if substring 'ess' is present, returns true
let string2 = console.log(gameName.substring(1, 4)); //Extracts substring from index 1 to 4, returns 'hes' Negative indices not allowed if  use negative index it will consider as 0
let string3 = console.log(gameName.slice(1, 4)); //Extracts substring from index 1 to 4, returns 'hes'
let string4 = console.log(gameName.slice(-4)); //Extracts last 4 characters, returns 'ess'
console.log(gameName.split("e")); //Splits the string at 'e', returns ['Ch', 'ss']
console.log(gameName.replace("Chess", "Checkers")); //Replaces 'Chess' with 'Checkers'
console.log(gameName.repeat(3)); //Repeats the string 3 times
console.log(gameName.trim()); //Removes whitespace from both ends (if any)
