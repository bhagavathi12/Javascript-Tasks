
/* GreetDefault Function:
Define another function similar to greet but name it greetDefault. 
This function should have a default parameter name set to "Guest".
If no name is provided when calling this function, it should return "Hello, Guest!".
Call the greetDefault function without any arguments and log the result to the console. */

function greetDefault(){
    const name = "Guest"
    return `Hello ${name}`
}
console.log(greetDefault())