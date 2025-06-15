// IF STATEMENTS = if a condition is true, execute some code
//                  if not. do something else

// let age = 25;

// if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("You must be 18 to enter this site");
// }

//Example 2
// let time = 9;

// if(time < 12){
//     console.log("Good morning");
// }
// else{
//     console.log("Good afternoon");
// }

//Example 3
// let isStudent = false;

// if(isStudent){
//     console.log("You are a student");
// }
// else{
//     console.log("You are not a student")
// }

//Example 4 - Adding an IF statement within anpther IF statement
let age = 17;
let hasLicense = false;

if(age >= 18){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("Yolu do not have your license yet!")
    }
}
else{
    console.log("You must be 18+ to have a license");
}
