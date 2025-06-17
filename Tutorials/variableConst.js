// Const means a variable that cannot change
// it adds some security to our code

//Simple formula to calculate the circumference of a circle
const PI = 3.14159
let radius;
let circumference;

// HOW TO ACCEPT USER INPUT
radius = window.prompt("Enter the radius of the circle");

//CONVERT THE USER INPUT INTO A STRING CAUSE IT IS ORIGNALLY A NUMBER
radius = Number(radius);

//PI = 420.69;

//CALCULATING CIRCUMFERENCE
circumference = 2 * PI * radius;

console.log(`The circumference is ${circumference}`);