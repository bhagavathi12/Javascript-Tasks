//Define a callback function named addNumbers that takes two numbers and returns their sum.
const addNumbers = function(a,b){
    return(`Sum of ${a} and ${b} is ${a+b}`)
}
//Define a callback function named multiplyNumbers that takes two numbers and returns their product.

const multiplyNumbers = function(a,b){
    return(`Multiplication of ${a} and ${b} is ${a*b}`)
}

//Define a callback function named subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.

const subtractNumbers = function(a,b){
    return(`${b} - ${a} is ${b-a}`)
}

//Define a callback function named divideNumbers that takes two numbers and returns the result of dividing the first number by the second, ensuring to handle division by zero.
const divideNumbers = function(a,b){
    if (b==0){
        console.log('Error: Division by zero')
        return null
    }
    else{
        return(`${a}/${b} is ${b/a}`)
    }
}

/* Define a function named performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation) and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).
Inside performArithmetic, call the operation function and pass num1 and num2 as arguments.
The function should return the result. */

const performArithmetic = function(num1,num2,fn){
    return(fn(num1,num2))
}

//Call performArithmetic with two numbers (e.g., 5 and 3) and the addNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,addNumbers))
//Call performArithmetic with two numbers (e.g., 5 and 3) and the multiplyNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,multiplyNumbers))
//Call performArithmetic with two numbers (e.g., 5 and 3) and the subtractNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,subtractNumbers))
//Call performArithmetic with two numbers (e.g., 5 and 3) and the divideNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,divideNumbers))
