// Flyweight Pattern - Reuse existing instances when working with identical objects

/**
 * @flyweight
 * The flyweight pattern is a useful way to conserve memory when we're creating a large number of similar objects
 */

// In our application, we want users to be able to add books. All books have a title, an author, and an isbn number! However, a library usually doesn't have just one copy of a book: it usually has multiple copies of the same book.

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Let's create the functionality to add new books to the list. If a book has the same ISBN number, thus is the exact same book type, we don't want to create an entirely new Book instance. Instead, we should first check whether this book already exists.

const books = new Map();

const createBook = (title, author, isbn) => {
    const existingBook = books.has(isbn);
    if (existingBook) return books.get(isbn)
    // If it doesn't contain the book's ISBN number yet, we'll create a new book and add its ISBN number to the isbnNumbers set.
    const book = new Book(title, author, isbn);
    books.set(isbn, book);

    return book;
}

// The createBook function helps us create new instances of one type of book. However, a library usually contains multiple copies of the same book! Let's create an addBook function, which allows us to add multiple copies of the same book. It should invoke the createBook function, which returns either a newly created Book instance, or returns the already existing instance

// In order to keep track of the total amount of copies, let's create a bookList array that contains the total amount of books in the library.

const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
    const book = {
        ...createBook(title,author,isbn),
        sales,
        availability,
        isbn,
    }

    bookList.push(book);
    return book;
}

// Perfect! Instead of creating a new Book instance each time we add a copy, we can effectively use the already existing Book instance for that particular copy. Let's create 5 copies of 3 books: Harry Potter, To Kill a Mockingbird, and The Great Gatsby

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

// The flyweight pattern is useful when you're creating a huge number of objects, which could potentially drain all available RAM. It allows us to minimize the amount of consumed memory.

