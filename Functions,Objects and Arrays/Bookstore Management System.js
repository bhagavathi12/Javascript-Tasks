//Define an array called inventory.Populate the array with several objects, each representing a book in the bookstore's inventory with properties such as id, title, author, price, quantity, and any other relevant details.

let inventory =[{
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 15.99,
      quantity: 25,
      genre: "Fiction",
      publicationDate: "1960-07-11"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: 12.99,
      quantity: 40,
      genre: "Dystopian",
      publicationDate: "1949-06-08"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 9.99,
      quantity: 30,
      genre: "Romance",
      publicationDate: "1813-01-28"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 14.99,
      quantity: 15,
      genre: "Classic",
      publicationDate: "1925-04-10"
    }]
//Create a class called Book that can be used to create new book objects, which can then be added to the inventory array.
class Book{
    //The class should have a constructor that initializes the properties: id, title, author, price, quantity, and any other relevant details.
    constructor(id,title,author,price,quantity,genre,publicationDate){
        this.id = id,
        this.title=title,
        this.author=author,
        this.price=price,
        this.quantity=quantity,
        this.genre=genre,
        this.publicationDate=publicationDate
    }
}
//Define a function called displayBooks.

function displayBooks(arr){
    //Use the forEach method to iterate over the inventory array.Log each book in the format: BookTitle - Author (Price).
    arr.forEach((book)=>(console.log(`${book.title}-${book.author}(${book.price})`)))
}
//Define a function called addBook that takes book details as input: id, title, author, price, quantity.

function addBook(id,title,author,price,quantity,genre,publicationDate,arr){
    //Inside the function, create a new book object using the Book class.
    const newBook = new Book(id,title,author,price,quantity,genre,publicationDate)
    //Add the new book object to the inventory array.
    arr.push(newBook)
    console.log(arr)
}
//Define a function called updateBook that takes a book id and a quantity as arguments.
function updateBook(id,quantity,arr){
    //Use the find method to locate the book with the matching id in the inventory array.
    const update_Book=arr.find((book)=>(book.id===id))
    //If the book is found, update its details.
    update_Book.quantity = quantity
    console.log(arr)
}
//Define another function called updateBookWithMap, which does the same thing as updateBook, but uses the map function instead.
function updateBookWithMap(id,quantity,arr){
    const update_Bookarray = arr.map((book)=>(book.id === id)?book:null)
    const update_Book=update_Bookarray.filter((book)=>(book !== null))[0]
    update_Book.quantity = quantity
    console.log(arr)
}
//Define a function called removeBook that takes a book id as an argument.
function removeBook(id,arr){
    //Use the filter method to create a new array that excludes the book with the matching id.
    return(arr.filter((book)=>(book.id != id)))
}

displayBooks(inventory)
addBook(5,"Moby-Dick","Herman Melville",11.50,10,"Adventure","1851-10-18",inventory)
updateBook(3,20,inventory)
updateBookWithMap(5,15,inventory)
////Update the inventory array with the new array.
inventory=removeBook(4,inventory)
console.log(inventory)