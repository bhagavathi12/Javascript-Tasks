/* //Define an array called cart.
Populate the array with several objects, each representing an item in the shopping cart with properties such as name, price, and quantity. */

const cart =[{name:'bag',price:500,quantity:3},{name:'dress',price:2000,quantity:3},{name:'shoes',price:5000,quantity:2},{name:'perfume',price:200,quantity:10}]

//Define a function called calculateTotalPrice that takes one parameter: cart (the array of item objects).

function calculateTotalPrice(arr){
    //Inside the function, initialize a variable to hold the total price.
    let totalPrice = 0
    //Use the forEach method to iterate over the cart array.For each item, calculate the total price by multiplying the item's price and quantity, and add it to the total price variable.
    arr.forEach((a) => (totalPrice += (a.quantity*a.price)))
    //Return the total price.
    return(totalPrice)    
}
//Call the calculateTotalPrice function with the cart array as an argument.Log the result to the console.

console.log(`Total price:`,calculateTotalPrice(cart))