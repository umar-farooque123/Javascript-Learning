
// 🧪 1. Check Even or Odd //

let num = 4;

if (num % 2 == 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}

// 🧪 2. Weather Suggestion //

let weather = prompt("How is the weather today? (sunny, rainy, cold)");

if (weather === "sunny") {
    alert("It's sunny outside! Wear sunglasses and apply sunscreen.");
} else if (weather === "rainy") {
    alert("It's rainy! Don't forget to carry an umbrella or wear a raincoat.");
} else if (weather === "cold") {
    alert("It's cold! Wear a warm jacket and stay cozy.");
} else {
    alert("Weather is unusual! Just stay comfortable and enjoy your day.");
}

// 🧪 3. Grade Calculator //

let marks = +prompt("Apnay marks enter karo (0 - 100):");

if (marks >= 80) {
    alert("Grade: A+");
} else if (marks >= 70) {
    alert("Grade: A");
} else if (marks >= 60) {
    alert("Grade: B");
} else if (marks >= 0) {
    alert("Fail");
} else {
    alert("Invalid marks! Please 0 se 100 tak marks enter karo.");
}

// 🧪 4. Login System  //

const username = "admin";
const password = 12345;

let user = prompt("Enter a Username: ");
const userpassword = +prompt("Enter a Password: ");

if (user == username && userpassword == password) {
    alert("Login Successful");
} else {
    alert("Incorrect")
}


