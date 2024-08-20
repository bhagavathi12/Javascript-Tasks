//Define a variable named products. Assign it an array containing several objects, each representing a product with properties such as id, name, price, and category.

const products =[{name:'pen',id:1,price:250,category:'Stationary'},{name:'pencil',id:2,price:5,category:'Stationary'},{name:'Chicken',id:3,price:150,category:'Food'},{name:'Laptop',id:4,price:35000,category:'Electronics'},{name:'banana',id:5,price:20,category:'food'},{name:'noodles',id:6,price:100,category:'food'},{name:'chocolate',id:7,price:3,category:'food'}]


//Create a new function called displayProducts that takes an array as an argument.

function displayProducts(arr){
    //Inside the function, use the forEach method to iterate over the array. Log each product in the format: ProductName - $Price (e.g., "Banana - $1.99").
    arr.forEach((a)=>(console.log(`${a.name}-$${a.price}`)))}
    
    //Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes each product's id, name, category, and a new priceWithTax which is the original price plus the tax.
    const Taxrate = 0.10
    const productsWithTax = products.map(function(product){
        let Taxprice = product.price + (Taxrate*product.price)
        return{
            name:product.name,
            id:product.id,
            category:product.category,
            price:Taxprice
        }})
    //Use the filter method to create a new array called foodProducts that contains only the products from the category "Food".
    const foodProducts = products.filter(function(product){
        if(product.category === 'food'){
            return product
        }})
    displayProducts(products)
    //Call the displayProducts function to display the productsWithTax array.
    console.log(`Products with Tax Price`)
    displayProducts(productsWithTax)
    //Call the displayProducts function to display the foodProducts array.
    console.log(`Food category products`)
    displayProducts(foodProducts)
    //Use the filter method to find products with a price under $10. Store the filtered results in a variable called affordableProducts.
    const affordableProducts = products.filter(function(product){
        if(product.price <= 10){return product}
    })
    //Use the map method on affordableProducts to return a string for each product that includes the name and price (e.g., "Banana - $1.99"). Store these strings in an array called affordableProductsStrings.
    const affordableProductsStrings =  affordableProducts.map(function(product){
        return(`${product.name}-$${product.price}`)
    })
    //Log the affordableProductsStrings array to the console.
    console.log(`AffordableProducts`,affordableProductsStrings)
    //Initialize a variable totalPrice to 0.Sum up the prices of all products and update totalPrice.
    let TotalPrice = 0
    productsWithTax.forEach(function(product){
        TotalPrice += product.price
    })
    //Log totalPrice after the loop.
    console.log(`Total Price`, TotalPrice)
    








