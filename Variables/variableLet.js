// Variables = a variable is a container that stores a value.
//               It behaves as if it were the values it contains.
//              Must be unique

// You must 1. Declare: lex x;
//          2. Assign: x = 50; 


//NUMBER VARIABLE TYPES
// let x;
// x = 100;
// console.log(x);

// let age;
// age = 25;
// console.log(age);

// let price = 10.99;
// console.log(price);

// let gpa = 2.1;
// console.log(gpa);

// how to format texts in JS
// console.log(`You are ${age} years old`);
// console.log(typeof age);  // typeof keyword tells us the type of variable

// console.log(`The price is $${price}`);
// console.log(typeof price);

// console.log(`Your GPA is: ${gpa}`);

//STRING VARIABLE TYPES
// let firstname = "Miriam";
// let favoriteFood = "Chicken"
// let email = "mimi868@gmail.com"

// console.log(`My name is ${firstname}`);
// console.log(typeof firstname);

// console.log(`I like ${favoriteFood}`);

// console.log(`My favorite email is ${email}`)

//BOOLEAN VARIABLE TYPES
// let online = true;  //vice versa (false)
// let forSale = false;
// let isStudent = true;

// console.log(`Miriam is online: ${online}`)
// console.log(typeof online);
// console.log(`Is this car for sale? ${forSale}`)
// console.log(`Enrolled: ${isStudent }`)

let fullname = "Miriam Ephraim";
let age = 21;
let isStudent = true;

// Letting the variable appear in the paragraph elements in the html file by their IDs
document.getElementById("p1").textContent = `My name is ${fullname}`
document.getElementById("p2").textContent = `I am ${age} years old`
document.getElementById("p3").textContent = `Enrolled ${isStudent}`