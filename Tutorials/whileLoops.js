// While loop - repeat some code WHILE some condition is true

// let username = "";

// if(username === ""){
//     console.log(`You didn't enter your name`);
// }
// else{
//     console.log(`Hello ${username}`);
// }

//Writing this code with a while loop
// while(username === ""){      //Strictly equal to operator(Datatype is important)
//     console.log(`You didn't enter your name`);
// }
// console.log(`Hello ${username}`);

//WARNING!! THIS could crash the computer if left to run for a while.
//DON'T RUN IF USERNAME NAME VARIABLE IS EMPTY.

//How to avoid the infinite loop
// while(username === "" || username === null){
//     username = window.prompt(`Enter your name`)
// }
// console.log(`Hello ${username}`);

// "username === null" will prevent you from clicking cancel in 
// the window prompt. You must enter something.

//DO WHILE - another variation of a while loop
// Its logic - do the code first then check the 
//Condition at the end

// do{
//     username = window.prompt(`Enter your name`)
// }while(username === "" || username === null)

// console.log(`Hello ${username}`);

//Another example
let loggedIn = false;
let username;
let passowrd;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    passowrd = window.prompt(`Enter your password`);
}