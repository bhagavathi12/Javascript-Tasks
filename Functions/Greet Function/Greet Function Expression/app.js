
/* Rewrite Greet as a Function Expression:
Rewrite the greet function as a function expression and store it in a variable called greetFunction.
Call the greetFunction with your name as the argument and log the result to the console. */

//Function Expression

const greetFunction = function (name) { 
    return`Hello ${name}`
}
const res = greetFunction(prompt('Enter your name:'));
console.log(res);

//Note: Function expressions can't be called before declaration. While normal function definition can be called before declaration.
