let myDate = new Date();
console.log(myDate); // Current date and time
console.log(typeof myDate); // "object"
console.log(myDate.toString()); // String representation of the date
console.log(myDate.toDateString()); // Date portion only
console.log(myDate.toLocaleString()); // Localized string representation
console.log(myDate.toTimeString()); // Time portion only
console.log(myDate.toISOString()); // ISO 8601 format
console.log(myDate.getFullYear()); // Current year
console.log(myDate.getMonth() + 1); // Current month (0-11, so add 1)
console.log(myDate.getDate()); // Current day of the month
console.log(myDate.getHours()); // Current hour
console.log(myDate.getMinutes()); // Current minutes
console.log(myDate.getSeconds()); // Current seconds
console.log(myDate.getMilliseconds()); // Current milliseconds
console.log(myDate.getDay()); // Day of the week (0-6, Sunday is 0)
console.log(myDate.getTime()); // Milliseconds since January 1, 1970

// Creating a specific date: December 25, 2022
let specificDate = new Date(2022, 11, 25); // Month is 0-indexed
console.log(specificDate.toDateString());
// Output: Sun Dec 25 2022

// Creating a specific date and time: July 4, 2023, 15:30:00
let specificDateTime = new Date(2023, 6, 4, 15, 30, 0); // Month is 0-indexed
console.log(specificDateTime.toString());
// Output: Tue Jul 04 2023 15:30:00 GMT+0000 (Coordinated Universal Time)

// Creating a date from a date string
let dateString = new Date("March 15, 2021 10:20:30");
console.log(dateString.toString());
// Output: Mon Mar 15 2021 10:20:30 GMT+0000 (Coordinated Universal Time)

////////Timestamp//////////
let timestampDate = new Date(1625077800000); // Timestamp for July 1, 2021
console.log(timestampDate.toString());
// Output: Thu Jul 01 2021 00:30:00 GMT+0000 (Coordinated Universal Time)

let myTimeStamp = Date.now(); // Current timestamp
console.log(myTimeStamp); // Current timestamp in milliseconds since January 1, 1970 in milliseconds

console.log(specificDateTime.getTime()); // Timestamp of specificDateTime
// Output: 1688475000000

// Converting timestamp back to date
let dateFromTimestamp = new Date(1688475000000);
console.log(dateFromTimestamp.toString());
// Output: Tue Jul 04 2023 15:30:00 GMT+0000 (Coordinated Universal Time)

/*Comparison Table between toDateString() and toString()
| Feature            | `toDateString()` | `toString()` |
| ------------------ | ---------------- | ------------ |
| Date               | ✅                | ✅            |
| Time               | ❌                | ✅            |
| Timezone           | ❌                | ✅            |
| Human readable     | ✅                | ✅            |
| Good for UI        | ✅                | ❌            |
| Good for debugging | ❌                | ✅            |
| Standard format    | ❌                | ❌            |  */

console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
// Output: e.g., "Saturday, June 15, 2024"
