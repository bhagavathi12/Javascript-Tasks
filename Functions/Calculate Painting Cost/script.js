//Define a callback function named areaOfRectangle that takes the length and width of a rectangle and returns the area.
const areaOfRectangle = function(length,width){
    return(`${length*width} `)
}

//Define a callback function named areaOfCircle that takes the radius of a circle and returns the area. Use the formula π * radius^2.
const areaOfCircle = function(radius){
    return(`${Math.PI*(radius**2)}`)    
}

//Define a callback function named areaOfTriangle that takes the base and height of a triangle and returns the area. Use the formula 0.5 * base * height.
const areaOfTriangle = function(base,height){
    return(`${0.5*base*height} `)
}

/* Define a function named calculatePaintingCost that accepts three parameters: dimension1, dimension2, and calculateArea (a callback function that specifies the area calculation for a shape).
Inside calculatePaintingCost, call the calculateArea function with dimension1 and dimension2 as arguments to get the area.
Then, define a constant costPerUnit to represent the cost of painting per square unit (e.g., $2 per square unit).
Calculate the total cost by multiplying the area by costPerUnit.
The function should return the total cost. */

const calculatePaintingCost = function(dimension1,dimension2,fn){
    const costPerUnit = 2
    return(`Total Painting cost of ${fn.name} is : $${fn(dimension1,dimension2)*2}`)
}

//Call calculatePaintingCost with dimensions for a rectangle (e.g., length = 5, width = 10) and the areaOfRectangle callback function. Log the result to the console.
console.log(calculatePaintingCost(5,10,areaOfRectangle))
//Call calculatePaintingCost with dimensions for a circle (e.g., radius = 3) and the areaOfCircle callback function. Note: Pass null for the second dimension as it's not needed. Log the result to the console.
console.log(calculatePaintingCost(5,null,areaOfCircle))
//Call calculatePaintingCost with dimensions for a triangle (e.g., base = 6, height = 8) and the areaOfTriangle callback function. Log the result to the console.
console.log(calculatePaintingCost(6,8,areaOfTriangle))