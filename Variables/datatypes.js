// Datatypes in JS

//NUMBERS
let x = 7;
console.log(typeof x);

//BOOLEAN TRUE OR FALSO
let y = true;
console.log(typeof y);

//STRING
let z = 'hello world';  //Inside single quotes
console.log(typeof z);

//UNDEFINED
let a;
console.log(a);
console.log(typeof a)

/* NULL
Explaining null using an example */

let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern) //how to test for a match

console.log(result);
console.log(typeof result);
/* The type of a NULL VARIABLE will always be returned 
as an OBJECT **it is known a bug */
//document.write(result); //if you don't want to display to the console.

//OBJECT - Doesn't fall under the 7 primitive data types
//1. Plain Objects - collection of key value pairs

const myself = {name:'Miriam Ephraim', age: 20};
console.log(myself);
console.log(typeof myself);

/*2. ARRAYS - Ordered collection of elements.
Elements do not need to be of the same type
You can access elements at specific indices cause they
are ordered.
*/
const array = ['1st', '2nd', '3rd'];
console.log(array[0]);
console.log(typeof array);

/*3. FUNCTIONS - Reusable blocks of code.
Considered first class citizens and can be assigned
to variables
*/

function logger(){ //logger is the name of the function
    console.log('hi');
    console.log(typeof logger);
}
//CALLING the Function
logger();

/*4. DATE OBJECTS - Represent a moment in time
 Contain a value in ms since January 1st 1970
 Write one by using the NEW KEYWORD followed by 
 DATE CONSTRUCTOR
 */

const time = new Date();
console.log(time);
console.log(typeof time);
