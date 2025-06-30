// For...Of loops - Used loop over iterable data structures (Arrays, strings, maps, etc)

//creating an array
// let characters = ['Sonic', 'Tails', 'Mario', 'Luigi', 'Link'];

// //Similar to "for in" loop except for in prints indexes instead of chars
// //syntax "for variable in iterable"
// for (i of characters){
//     console.log(i);
// }

// let course = "JavaScript";

// for (letter of course){
//     console.log(letter);
// }

// let characters = ['Sonic', 'Tails', 'Mario', 'Luigi', 'Link'];

//Similar to "for in" loop except for in prints indexes instead of chars
//"for in" is for looping over properties of an object
//syntax "for variable in iterable"
// for (i of characters){
//     if(i === "Luigi"){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

//Challenge 1
let colours = ["Red", "Orange", "Yellow", "Green", "Blue"];

// for (colour of colours){
//     console.log(colour);
// }

//challenge 2
for (colour of colours){
    if(colour === "Green"){
        break;
    }
    else{
        console.log(colour);
    }
}

