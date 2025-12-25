"Use strict";

// Comparison Operators in JavaScript
let a = 10;
let b = "12";
console.log("a =", a); // 10
console.log("b =", b); // "12"
console.log("a > b:", a > b); // false
console.log("a < b:", a < b); // true
console.log("a >= b:", a >= b); // false
console.log("a <= b:", a <= b); // true
console.log("a == b:", a == b); // false
console.log("a != b:", a != b); // true
console.log("a === b:", a === b); // false
console.log("a !== b:", a !== b); // true

console.log(null == undefined); // true
console.log(null === undefined); // false

// Comparing different types
console.log("5" > 3); // true
console.log("5" < 3); // false
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true === 1); // false
console.log(false === 0); // false
console.log("5" == 5); // true
console.log("5" === 5); // false

console.log(null > 0); // false   JS converts null to 0 for >
console.log(null >= 0); // true   JS converts null to 0 for >=
console.log(null == 0); // false  JS does NOT convert null for ==

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// Lexicographical comparison
console.log("apple" > "banana"); // false
console.log("apple" < "banana"); // true
console.log("apple" == "Apple"); // false
console.log("apple" > "Apple"); // true
console.log("2" > "12"); // true
console.log("2" < "12"); // false
console.log("2" == "12"); // false

/* 🧠 The Core Truth (Memorize This)
Comparison operators (< > <= >=) and equality operators (==) follow DIFFERENT rules.
This is not opinion. It’s JavaScript spec. */
