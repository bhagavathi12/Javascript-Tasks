/* Modify Calculate Area Function with Default Values:
Define a new function named calculateAreaWithDefaults that has default values of 1 for both width and height.
This means that if no arguments are provided, the function should return 1.
Call the calculateAreaWithDefaults function without any arguments and log the result to the console.
Call the calculateAreaWithDefaults function with width = 5 and height = 10, and log the result to the console.
 */

//CalculateAreaw with Defaults

function calculateAreaWithDefaults(width=1,height=1){
    return(`Area of a reactangle: ${width*height} cm^2`)
}

console.log(calculateAreaWithDefaults());
console.log(calculateAreaWithDefaults(5,10));
