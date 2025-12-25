let a = 1;
let b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); //exponentiation
console.log("a ++ =", a++); //post-increment
console.log("++ a =", ++a); //pre-increment
console.log("a -- =", a--); //post-decrement
console.log("-- a =", --a); //pre-decrement
console.log("a += b =", (a += b)); //a = a + b
console.log("a -= b =", (a -= b)); //a = a - b
console.log("a *= b =", (a *= b)); //a = a * b
console.log("a /= b =", (a /= b)); //a = a / b
console.log("a %= b =", (a %= b)); //a = a % b
console.log("a **= b =", (a **= b)); //a = a ** b
console.log("Comparison Operations:");
console.log("a == b :", a == b);
console.log("a != b :", a != b);
console.log("a === b :", a === b);
console.log("a !== b :", a !== b);
console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a >= b :", a >= b);
console.log("a <= b :", a <= b);
console.log("Logical Operations:");
console.log("a > 0 && b > 0 :", a > 0 && b > 0);
console.log("a > 0 || b < 0 :", a > 0 || b < 0);
console.log("!(a > b) :", !(a > b));
console.log("Bitwise Operations:");
console.log("a & b :", a & b);
console.log("a | b :", a | b);
console.log("a ^ b :", a ^ b);
console.log("~a :", ~a);
console.log("a << 1 :", a << 1);
console.log("a >> 1 :", a >> 1);

console.log("Ternary Operation:");
let max = a > b ? a : b;
console.log("Max of a and b is :", max);

console.log("Typeof Operation:");
console.log("Type of a :", typeof a);
console.log("Type of b :", typeof b);

let c = "5";
console.log("a + c =", a + c); //string concatenation
console.log("a * c =", a * c); //multiplication after type coercion
console.log("a == c :", a == c); //true due to type coercion
console.log("a === c :", a === c); //false, different types
console.log("End of operations demonstration.");
