/* Rewrite Greet as an Arrow Function:
Rewrite the greet function as an arrow function with a separate name greetArrow.
Call the greetArrow() function with your name as the argument and log the result to the console.
 */

//Arrow function

const greetArrow = name =>`Hello ${name}`;
console.log(greetArrow(prompt('Enter your name:')));
 
//In Arrow Function return happens implicitly. No need to write separate return keyword for a single line operation like the above.
// If we need to do multiple operation with the parameter, i.e...if we need multiple lines of code inside the function  then we need the return statement.
