//singelton object :- If an object has only one instance throughout the application, it is called a singleton object.

//object literal syntax
const JsUser = {
  name: "Aditya",
  "full name": "Aditya Ranjan",
  age: 21,
  location: "India",
  email: "xyz@google.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Friday"],
};

console.log(JsUser); // { name: 'Aditya', age: 21 }
console.log(JsUser.name); // "Aditya"
console.log(JsUser.age); // 21
console.log(JsUser["location"]); // "India"
console.log(JsUser["full name"]); // "Aditya Ranjan" square bracket notation is used when the property name has spaces or special characters or in normal cases as well
console.log(typeof JsUser); // "object"
