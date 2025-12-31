const marvel_heros = ["hulk", "ironman", "thor", "captain america"];
const dc_heros = ["superman", "batman", "flash", "aquaman"];

// marvel_heros.push(dc_heros); // Adds the entire dc_heros array as a single element to            marvel_heros
// console.log("After push:", marvel_heros);

// Combine both arrays into one array
const all_heros = marvel_heros.concat(dc_heros); //concat returns a new array without modifying the existing arrays
console.log("All Heros:", all_heros);

// Using spread operator to combine arrays
const all_heros_spread = [...marvel_heros, ...dc_heros];
console.log("All Heros using spread operator:", all_heros_spread); //spread operator unpacks the elements of the arrays into a new array

// Finding index of an element
const indexOfThor = marvel_heros.indexOf("thor");
console.log("Index of Thor in Marvel Heros:", indexOfThor); // Output: 2

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); //flattens the array up to 2 levels deep
//flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log("Flattened Array:", real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray(marvel_heros)); //true
console.log(Array.from("Aditya")); //['A', 'd', 'i', 't', 'y', 'a']
console.log(Array.from({ name: "Aditya" })); //returns an empty array since the object is not iterable
console.log(Array.of(1, 2, 3, 4, 5)); //[1, 2, 3, 4, 5] // creates a new array instance with a variable number of arguments
