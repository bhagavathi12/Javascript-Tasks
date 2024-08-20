//Define an array called inventory.Populate the array with several objects, each representing a product in the store's inventory with properties such as id, name, price, quantity, and any other relevant details.

let inventory = [{
    id: 1,
    name: "Apple",
    price: 30.00,
    quantity: 100,
    category: "Food",
    supplier: "FreshFarm"
  },
  {
    id: 2,
    name: "Banana",
    price: 15,
    quantity: 50,
    category: "Food",
    supplier: "TropicalFruitCo"
  },
  {
    id: 3,
    name: "Carrot",
    price: 5,
    quantity: 200,
    category: "Vegetable",
    supplier: "GreenGarden"
  },
  {
    id: 4,
    name: "Broccoli",
    price: 50,
    quantity: 75,
    category: "Vegetable",
    supplier: "GreenGarden"
  },
  {
    id: 5,
    name: "Milk",
    price: 25,
    quantity: 30,
    category: "Dairy",
    supplier: "DairyFarm"
  } 
]

//Create a class called Product that can be used to create new product objects, which can then be added to the inventory array.

class Product{
    //The class should have a constructor that initializes the properties: id, name, price, quantity, and any other relevant details.
    constructor(id,name,price,quantity,category,supplier){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
        this.category = category
        this.supplier = supplier
    }
}
//Define a function called displayProducts.
function displayProducts(arr){
    //Use the forEach method to iterate over the inventory array.
    //Log each product in the format: ProductName - Price (Quantity).
    arr.forEach((product) => (console.log(`${product.name}-${product.price}(${product.quantity}no's)`)))
}
//Define a function called addProduct that takes product details as input: id, name, price, quantity.

function addProduct(id,name,price,quantity,category,supplier,arr){
    //Inside the function, create a new product object using the Product class.
    const newObj = new Product(id,name,price,quantity,category,supplier)
    //Add the new product object to the inventory array.
    arr.push(newObj)
    console.log(arr)
}

//Define a function called updateProduct that takes a product id and a quantity as arguments.
function updateProduct(id,quantity,arr){
    //Use the find method to locate the product with the matching id in the inventory array.
    const productid = arr.find((product) => (product.id === id))
    //If the product is found, update its quantity.
    productid.quantity = quantity
    console.log(arr)
}
//Define another function called updateProductWithMap, which does the same thing as updateProduct, but uses the map function instead. 
function updateProductwithMap(id,quantity,arr){
    const productid = arr.map((product)=>(product.id === id) ? product:null)
    const filteredproduct = productid.filter((product) => product != null)[0]
    filteredproduct.quantity = quantity
    console.log(arr)
}
//Define a function called removeProduct that takes a product id as an argument.

function removeProduct(id,arr){
    //Use the filter method to create a new array that excludes the product with the matching id.
    const filteredInventory = arr.filter((product)=>(product.id !== id))
    return(filteredInventory)
}


displayProducts(inventory)
addProduct(6,'Egg',5.50,300,'Diary','Eggco',inventory)
displayProducts(inventory)
updateProduct(6,500,inventory)
updateProductwithMap(5,100,inventory)
////Update the inventory array with the new array.
inventory = removeProduct(3,inventory)
console.log(inventory)  