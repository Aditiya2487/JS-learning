/* Stack = Notebook (small, organized, quick access)
Heap = Warehouse (big, flexible, slower access) */

// The Stack (Execution + Primitive Values)
// What goes in the Stack?
// Function calls
// Local variables
// Primitive data types

let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
// 'a' and 'b' are stored in the stack. Changing 'b' does not affect 'a'.

// The Heap (Reference Values)
// What goes in the Heap?
// Objects
// Arrays
// Functions
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"
// 'obj1' and 'obj2' reference the same object in the heap. Changing 'obj2' affects 'obj1'.
// Summary:
// Stack: Fast access, stores function calls and primitive values.
// Heap: Slower access, stores objects, arrays, and functions.
// Understanding the difference helps in managing memory and optimizing performance.

// Example to illustrate stack and heap behavior
function modifyValues(primValue, refValue) {
  primValue = primValue + 10;
  refValue.name = "Charlie";
}

let num = 5;
let person = { name: "David" };
modifyValues(num, person);

console.log(num); // 5
console.log(person.name); // "Charlie"
// 'num' remains unchanged because it's a primitive value passed by value.
// 'person' is modified because it's an object passed by reference.
// This example highlights how primitive and reference types behave differently in memory.
