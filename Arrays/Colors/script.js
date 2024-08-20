//Define a variable named colors and assign it an array containing strings representing different colors (e.g., "red", "green", "blue").
const colors = ['red','green','blue']
//Log the first element of the colors array to the console.
console.log(colors[0])
//Change the second element of the colors array to "yellow".
//NOTE: Arrays are mutable though it is defined with const type. 
colors[1]='yellow'
//Log the second element of the colors array to the console to verify the change.
console.log(colors[1])

//Add a new color to the end of the colors array. 
colors.push('purple')
//Log the last element of the colors array to the console.
console.log(colors[colors.length-1])

//log the array to the console
console.log(colors)
console.log(`Iterating colors array using for loop`)
//Use a for loop to iterate over the colors array and log each color to the console.
for(let i = 0;i<colors.length;i++){
    console.log(colors[i])
}

//Use a while loop to iterate over the colors array and log each color to the console.
let i = 0
console.log(`Iterating Colors array using while loop`)
while(i<colors.length){
    console.log(colors[i])
    i++
}
//Use a for...of loop to iterate over the colors array and log each color to the console.
console.log('Iterating colors array using for ..of loop')
for (const i of colors) console.log(colors[i])

//Use the typeof operator to check the type of colors array and log it to the console.
// Note:Arrays are a special kindof object
console.log(typeof(colors))

//Log the length property of the colors array to the console to see the number of elements in the array.
console.log(colors.length)

//Use the push method to add another color to the end of the colors array.
//Note: Push method adding the arguments to the last of the array.

colors.push('green')
console.log(colors)

//push method also returns the length of the new array.
console.log(colors.push("black")) //--this will log the new length of the array.
console.log(colors)
//Use the pop method to remove the last element from the colors array.
//pop method returns the removed element.
console.log(colors.pop())
console.log(colors)

//Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
//we have pass the array element as argument to indexOf method.
//if the passed argument deosn't belong to the array, it'll log '-1'.
console.log(colors.indexOf('blue'))
console.log(colors.indexOf('black'))

//Add a property to the colors array called owner and set its value to your name.
//we can add a property to the arrays just like objects using dot operator. Because array is a special object
colors.owner = 'bhaga'
//Log the colors array to see if the owner property is added.
console.log(colors)
//Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.
for(const i in colors){
    console.log(`${i},${colors[i]}`)
}