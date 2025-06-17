//Hour
// If hour is between 12am and 12pm: Good morning!
//If hour is between 12pm and 5pm: Good afternoon!
//Otherwise: Good evening

let hour = 17;
if (hour >= 0 && hour <12){
    console.log("Good morning!");
}
else if (hour >= 12 && hour < 17){
    console.log("Good afternoon!");
}
else{
    console.log("Good evening!");
}

// NB you can get rid of the curly brackets to make the 
// code clean since we are dealing with a single statement