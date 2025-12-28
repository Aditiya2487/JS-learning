const score = 500;
const balance = new Number(1000);
console.log(typeof score); //number
console.log(score); //500
console.log(typeof balance); //object
console.log(balance); // [Number: 1000]
console.log(balance.toString()); //"1000" //Converts number to string
console.log(balance.toString().length); //4 //Length of the string "1000"
console.log(balance.toFixed(2)); //"1000.00" //Formats number to 2 decimal places
console.log(balance.toPrecision(3)); //"1.00e+3" //Formats number to specified length
//Note: toFixed and toPrecision return strings
// toPrecision is used for significant digits representation like in scientific notation ex:- 1.23e+5 for 123000 and 123.9 for 123.89 and so on

console.log(Number.isInteger(score)); //true //Checks if score is an integer
console.log(Number.isNaN(NaN)); //true //Checks if value is NaN

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN")); //"1,00,00,000" //Formats number according to locale (Indian Numbering System)   if you use "en-US" it will format as "10,000,000"
