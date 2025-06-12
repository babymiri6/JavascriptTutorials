/*LOGICAL OPERATORS - used to combine or manipulate boolean values
                        (true or false)

                        AND = &&
                        OR = ||
                        NOT = !
*/

//Weather checker with the logical operator, AND
const temp = 0;

/* if(temp > 0 && temp <= 30){
    console.log('The weather is good');
}
else{
    console.log('The weather is bad');
} */

//Weather checker with the logical operator, OR
/* if(temp <= 0 || temp > 30){
    console.log('The weather is BAD');
}
else{
    console.log('The weather is GOOD');
} */

//Weather checher with the logical operator, NOT
const isSunny = false;

/* if(isSunny){
    console.log('It is SUNNY');
}
else{
    console.log('It is CLOUDY');
} */

//OR IT CAN BE FLIPPED TO USE THE ! (NOT)
if(!isSunny){
    console.log('It is CLOUDY');
}
else{
    console.log('It is SUNNY');
}

//  = ASSIGNMENT OPERATOR
//  == COMPARISON OPERATOR(compare if values are equal)
//  === STRICT EQUALITY Operator (Compare if values & datatype are equal)
// != INEQUALITY OPERATOR
// !== STRICT INEQUALITY OPERATOR

const PI = 3.14;

if (PI == "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is not Pi");
}
// JAVASCRIPT will output TRUE because we are
//  not concerned about the datatype.