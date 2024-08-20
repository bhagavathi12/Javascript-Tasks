//Define a class named Book that takes parameters for title, author, publisher, year, and genre.
//Inside the class's constructor, set these parameters as properties of the book object.

class Book{
    constructor(title,author,publisher,year,genre){
        this.title = title
        this.author = author
        this.publisher = publisher
        this.year = year
        this.genre = genre
     }
//Add a method named describe inside the class that logs a brief description of the book, combining the title, author, and year, e.g., "Five Point Someone - Chetan Bhagat (2004)".
     describe(){
        console.log(`${this.title}-${this.author}(${this.year})`)
     }
//Add a method named displayGenre inside the class that logs the genre of the book formatted as a string, e.g., "Genre: Fiction".
     displayGenre(){
        console.log(`Genre: ${this.genre}`)
     }
}

//Create an object named classicBook with properties representing a classic novel’s details. For example, "Pride and Prejudice" by Jane Austen, published by T. Egerton in 1813, genre "Classic".
const classicBook = new Book('Pride and Prejudice','Jane Austen','T.Egerton',1813,'Classic')

//Create an object named sciFiBook with properties representing a science fiction book. For example, "Dune" by Frank Herbert, published by Chilton Books in 1965, genre "Science Fiction".
const sciFiBook = new Book('Dune','Frank Herbert','Chilton Books',1965,'Science Fiction')

//Log both objects to the console.
console.log(classicBook)
console.log(sciFiBook)

//Call the describe method on the classicBook object to see a summary of the book.
classicBook.describe()

//Call the displayGenre method on the classicBook object to log the genre.
classicBook.displayGenre()

//Call the describe method on the sciFiBook object to see a summary of the book
sciFiBook.describe()
//Call the displayGenre method on the sciFiBook object to log the genre.
sciFiBook.displayGenre()


