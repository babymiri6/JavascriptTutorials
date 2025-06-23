// FOR LOOP - Repeat some code a LIMITED amount of times

// for(let i = 0; i <= 2; i++){  //we created a temporary counter(variable), then a condition, then an increment/ decrement in the parenthesis
//     console.log("Hello");
// }

// for(let i = 2; i <= 10; i+=2){  //increment in twos
//      console.log(i);
// }

// for(let i = 10; i > 0; i--){  //decrement in ones
//      console.log(i);
// }

// console.log("HAPPY NEW YEAR")

//CONTINUE AND BREAK
// for(let i = 1; i <= 20; i++){

//      if(i == 13){
//           continue;      //With continue, you can skip an interation
//      }
//      else{
//           console.log(i);
//      }
     
// }

for(let i = 1; i <= 20; i++){

     if(i == 13){
          break;      //Break will break out of the loop completelly.
     }
     else{
          console.log(i);
     }
     
}

