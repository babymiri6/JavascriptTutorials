//OPERATORS IN JAVASCRIPT

/*ARITHMETIC OPERATORS - Operands (values, variables, etc.)
                        eg: 11 = x + 5;
                        Operators (+ - * /)      
*/

let students = 30;

// students = students + 1; //ADDITION
// students = students - 1; //SUBTRACTION
// students = students * 2; //MULTIPLICATION
// students = students / 2; //DIVISION
// students = students ** 2; //EXPONENT
//let extrastudents = students % 3; //MODULOS
 
//Using AUGMENTED assignment operators
//students += 1;
//students -= 1;
//students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;  //MODULUS is useful for determining even/odd NOs

//INCREMENT AND DECREMENT OPERATORS
// students++
// students--

console.log(students);
// console.log(extrastudents);

/*OPERATOR PRECEDENCE
1. Parenthesis ()
2. Exponents
3. Multiplication & division & modulo
4. Addition & Subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

let result2= 12 % 5 + 8 / 2;
console.log(result2);

let result3 = 6 / 2 ** (2 + 5);
console.log(result3);
