// SWITCH - can be a efficient replacement to 
// many else if statementS

//WRITING AN ELSE IF STATEMENT then writing the same
// logic with a SWITCH STATEMENT

//ELSE IF FORMAT
// let day = 8;

// if(day == 1){
//     console.log("Monday");
// }
// else if(day == 2){
//     console.log("Tuesday");
// }
// else if(day == 3){
//     console.log("Wednesday");
// }
// else if(day == 4){
//     console.log("Thursday");
// }
// else if(day == 5){
//     console.log("Friday");
// }
// else if(day == 6){
//     console.log("Saturday");
// }
// else if(day == 7){
//     console.log("Sunday");
// }
// else{
//     console.log(`${day} is not a day`);
// }

//SWITCH FORMAT
let day = "Pizza"

switch(day){
    case 1:
        console.log("It is Monday");
        break;      //Always remember to add break in switches
     case 2:
        console.log("It is Tuesday");
        break;      //We add the break statements so that
     case 3:        //we can break out the switch once we have a match
        console.log("It is Wednesday");
        break;
     case 4:
        console.log("It is Thursday");
        break;
     case 5:
        console.log("It is Friday");
        break;
     case 6:
        console.log("It is Saturday");
        break;
     case 7:
        console.log("It is Sunday");
        break;
    //You can add a default case in case there are no matches
    default:
        console.log(`${day} is not a day`);
}