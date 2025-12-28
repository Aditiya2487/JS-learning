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
console.log(Number.isNaN(NaN)); //true //Checks if value is NaN. It is a object method

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN")); //"1,00,00,000" //Formats number according to locale (Indian Numbering System)   if you use "en-US" it will format as "10,000,000"

//********************* MATHS ********************  */
console.log(Math);
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.SQRT2); //1.4142135623730951
console.log(Math.abs(-55)); //55  //Absolute value
console.log(Math.round(4.6)); //5  //Rounds to nearest integer
console.log(Math.floor(4.9)); //4  //Rounds down to nearest integer
console.log(Math.ceil(4.1)); //5  //Rounds up to nearest integer
console.log(Math.min(0, 150, 30, 20, -8, -200)); //-200  //Returns minimum value
console.log(Math.max(0, 150, 30, 20, -8, -200)); //150  //Returns maximum value
console.log(Math.random()); //Random number between 0 and 1
console.log(Math.random() * 100); //Random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); //Random integer between 0 and 99
console.log(Math.floor(Math.random() * 100) + 1); //Random integer between 1 and 100
console.log(Math.pow(2, 3)); //8  //2 raised to the power 3
console.log(Math.sqrt(64)); //8  //Square root of 64
console.log(Math.cbrt(27)); //3  //Cube root of 27
console.log(Math.log(1)); //0  //Natural logarithm of 1
console.log(Math.log10(1000)); //3  //Base 10 logarithm of 1000
console.log(Math.sin(Math.PI / 2)); //1  //Sine of 90 degrees (PI/2 radians)
console.log(Math.cos(0)); //1  //Cosine of 0 degrees

const min = 10;
const max = 20;

const randomInt = Math.floor(Math.random() * (max - min + 1)) + min; //Random integer between min and max (inclusive)
console.log(randomInt);
