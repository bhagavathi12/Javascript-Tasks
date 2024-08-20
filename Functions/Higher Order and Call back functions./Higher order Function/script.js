
//Higher Order Function -- A Function that receives another function as an argument or returns a new function, or both.


//Higher Order Function.

/* Define Higher Order Function:
Define a function named higherOrderFunction that takes two parameters: num (a number) and callback (a function).
Inside higherOrderFunction, call the callback function and pass num as an argument.
 */

function higherOrderFunction(num,fn){
    fn(num)
}

//Call back function.
/* Define Callback Function and Call Higher Order Function:
Define a function named callbackFunction that takes a number as an argument and logs it to the console.
Call higherOrderFunction with a number (e.g., 5) and pass callbackFunction as the callback.
 */
const callbackFunction = function(a){
    console.log(a)
}

const square = function(a){
    console.log(a**2)
}

/* Call Higher Order Function with a Function Expression as Callback:
Call higherOrderFunction with a number (e.g., 10) and a function expression as the callback.
The function expression should log the number to the console.
 */

higherOrderFunction(10,callbackFunction)

/* Callback to Log Square of the Number:
Call higherOrderFunction again with a number (e.g., 4) and a function expression as the callback.
The new function expression should log the square of the number to the console.
 */
higherOrderFunction(4,square)

/* Callback to Log Sum of Two Numbers:
Define a new function named newHigherOrderFunction that takes three parameters: num1, num2, and callback.
Inside newHigherOrderFunction, call the callback function with num1 and num2 as arguments.
Call newHigherOrderFunction with two numbers (e.g., 3 and 7) and a function expression as the callback.
The function expression should take two parameters and log their sum to the console.
 */

const newHigherOrderFunction = function(num1,num2,fn){
    fn(num1,num2)
}

const sum = function(num1,num2){
    console.log(`The Sum of ${num1} and ${num2} is: ${num1+num2}`)
}

newHigherOrderFunction(3,7,sum)
