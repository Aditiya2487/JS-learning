const myArray = [10, 20, 30, 40, 50];
const array2 = new Array(1, 2, 3, 4, 5); // Alternative way to create an array

// Accessing elements
console.log("First element:", myArray[0]); // 10
console.log("Third element:", myArray[2]); // 30

// Modifying elements
myArray[1] = 25;
console.log("Modified array:", myArray); // [10, 25, 30, 40, 50]

// Array length
console.log("Array length:", myArray.length); // 5

// Adding elements
myArray.push(60); // Adds element at the end
console.log("Array after push:", myArray); // [10, 25, 30, 40, 50, 60]
console.log("Array length:", myArray.length);
myArray.unshift(5); //Different from push, unshift adds element at the beginning
console.log("Array after unshift:", myArray); // [5, 10, 25, 30, 40, 50, 60]
console.log("Array length:", myArray.length);

// Removing elements
const removedElement = myArray.pop(); // Removes element from the end
console.log("Removed element:", removedElement); // 60
console.log("Array after pop:", myArray); // [5, 10, 25, 30, 40, 50]

const shiftedElement = myArray.shift(); //Different from pop, shift removes element from the beginning
console.log("Removed element:", shiftedElement); // 5
console.log("Array after shift:", myArray); // [10, 25, 30, 40, 50]

console.log(myArray.includes(25)); // true
console.log(myArray.indexOf(40)); // 3

const newarray2 = myArray.join();
console.log(newarray2); // "10,25,30,40,50"
console.log(typeof newarray2); // "string"

const newarray3 = myArray.join(" - ");
console.log(newarray3); // "10 - 25 - 30 - 40 - 50"
console.log(typeof newarray3); // "string"

///**************  slice() vs splice() in JavaScript (Clear & Practical) ****************/

// Syntax
// array.slice(start, end)
//start → inclusive
//end → exclusive
//Does NOT modify original array
//Returns a new array

const arr = [1, 2, 3, 4, 5];
const part = arr.slice(1, 4);
console.log(part); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] ✅ unchanged

// Negative indexes work
const rmpart = arr.slice(-2); // [4, 5]  //negative index counts from end
console.log(rmpart); // [4, 5]
console.log(arr); // [1, 2, 3, 4, 5] ✅ unchanged

// 2️⃣ splice() — Remove / insert by modifying original
// Syntax
// array.splice(start, deleteCount, item1, item2, ...)

//MODIFIES original array ❗
//Returns removed elements
//Can delete, insert, or both

const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.splice(1, 2);
console.log(removed); // [2, 3]
console.log(arr2); // [1, 4, 5] ❌ changed

const arr3 = [1, 2, 3];
arr3.splice(1, 1, 99); // At index 1, remove 1 element and insert 99
console.log(arr3); // [1, 99, 3]  ❌ changed

//Note : splice() without args removes everything from the array
const arr4 = [1, 2, 3, 4, 5];
arr4.splice(0);
console.log(arr4); // []  ❌ changed

// Summary:
// slice() creates a new array and does not modify the original.
// splice() modifies the original array by removing/inserting elements.
