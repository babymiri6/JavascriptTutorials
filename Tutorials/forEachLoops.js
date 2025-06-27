// forEach() = method used to iterate over the elements
//      of an array and apply a specfied function (callback)
//      to each element

//      array.forEach(callback)
//      element, index, array are provided

// let numbers = [1, 2, 3, 4 , 5];

// numbers.forEach(cube);
// // numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }
// // function square(element, index, array){
// //     array[index] = element * element;
// // }

// //OR
// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }
// function display(element){
//     console.log(element);
// }

//Second example
// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(uppercase);      //making all the strings of all the elements uppercase before displaying.

// let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"];

// fruits.forEach(lowercase);

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);    //calling the display function.

//Creating a function to make all the strings uppercase
function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

//creating a function to make all strings lowercase
function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}

// creating a function to capitalize all strings
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
//"charAt()" is used to get the element at the index specified
// in the "()"
//"slice(1)" creates a substring of every element beginning at index 1.

function display(element){      //creating the display function
    console.log(element);
}

