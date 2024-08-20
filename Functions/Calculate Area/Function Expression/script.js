/* Rewrite Calculate Area as a Function Expression:
Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.
Call the calculateAreaFunction with width = 5 and height = 10, and log the result to the console.
 */

//Function Expression.

const calculateAreaFunction = function(width,height) {
    return(`Area of a reactangle: ${width*height} cm^2`)
}

console.log(calculateAreaFunction(5,10))