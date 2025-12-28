const name = "Aditya";
const repoCount = 50;

console.log("Hello " + name + " , your repo count is " + repoCount);
console.log(`Hello ${name} , your repo count is ${repoCount}`); //String Interpolation (Modern Way  to include variables in strings using backticks)
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
