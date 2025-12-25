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
console.log("a < b :", a < b);
console.log("a !== b :", a !== b);
console.log("a > b :", a > b);
console.log("a >= b :", a >= b);
console.log("a <= b :", a <= b);
console.log("Logical Operations:");
console.log("a > 0 && b > 0 :", a > 0 && b > 0);
console.log("a > 0 || b < 0 :", a > 0 || b < 0);
console.log("!(a > b) :", !(a > b));
console.log("Bitwise Operations:");
console.log("a & b :", a & b);
console.log("~a :", ~a);
console.log("a | b :", a | b);
console.log("a ^ b :", a ^ b);
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
// console.log(a + b + c); //mixed addition and concatenation
console.log("End of operations demonstration.");

console.log(1 + 2 + "3"); // "33"
console.log(1 + "2" + "3"); // "123"  Once a string enters +, everything becomes string concatenation.
console.log("1" + 2 + 3); //"123"  Order matters. JS evaluates left to right.
console.log("1" + (2 + 3)); //"15"
console.log(+"123"); //123
console.log(+"123abc"); //NaN

/*Post-increment (x++)
returns OLD value → THEN increments

Pre-increment (++x)
increments FIRST → THEN returns */

/* The Golden Rules (Burn These In)
🔑 Rule 1: + is dangerous
If both operands are numbers → addition
If either operand is string → concatenation

🔑 Rule 2: Evaluation is left → right
"a" + 1 + 2   // "a12"
"a" + (1+2)  // "a3"

🔑 Rule 3: Parentheses beat everything
If you want control — use parentheses. */
