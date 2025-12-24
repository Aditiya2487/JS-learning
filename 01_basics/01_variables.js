const accountId = 144553;
let accountEmail = "aditya@google.com";
var accountPassword = "password123";
accountCity = "Bangalore";
accountEmail = "xyx@gooogle.com";
accountPassword = "newpassword123";
accountCity = "New York";
// accountId = 2; //not allowed

let accountState; //output: undefined

/*
Prefer not to use var(because of its function scope and hoisting issues)
Prefer to use const by default
Use let only if you plan to change the value of variable
*/

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
