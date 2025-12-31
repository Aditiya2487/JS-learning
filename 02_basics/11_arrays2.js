const marvel_heros = ["hulk", "ironman", "thor", "captain america"];
const dc_heros = ["superman", "batman", "flash", "aquaman"];

// marvel_heros.push(dc_heros); // Adds the entire dc_heros array as a single element to            marvel_heros
// console.log("After push:", marvel_heros);

// Combine both arrays into one array
const all_heros = marvel_heros.concat(dc_heros);
console.log("All Heros:", all_heros);
