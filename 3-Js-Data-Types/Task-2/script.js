
// Taking input from user
let name = prompt("Enter Your Name:");
let age = +prompt("Enter Your Age:"); // + converts string to number
let isStudent = prompt("Are you a student? (true/false)").toLowerCase() === "true"; // convert to boolean

// Showing alert with types
alert(
    "Name: " + name + " - " + typeof name + "\n" +
    "Age: " + age + " - " + typeof age + "\n" +
    "isStudent: " + isStudent + " - " + typeof isStudent
);

