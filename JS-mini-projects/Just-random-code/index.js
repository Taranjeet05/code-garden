class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(
        `💖 You already Borrowed this Book with title: "${this.title}" by ${this.author}`
      );
    } else {
      console.log(`This Book is Not Available ⏳....`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(
      `✅✨ You returned this Book with title: "${this.title}" by ${this.author}`
    );
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`📖 "${book.title} added to library"`);
  }

  listAvailableBooks() {
    const available = this.books.filter((book) => book.isAvailable);
    console.log("📚 Available Books:");
    available.forEach((book) =>
      console.log(`- ${book.title} by ${book.author}`)
    );
  }

  findBookByTitle(title) {
    const found = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (found) {
      console.log(`Found: ${found.title}, by ${found.author}`);
      return found;
    } else {
      console.log(`Not found any Book related to search query`);
      return null;
    }
  }
}

const library = new Library();
const book1 = new Book("The Alchemist", "Paulo C", "12345");
const book2 = new Book("Atomic Habits", "James Clear", "67890");

library.addBook(book1);
library.addBook(book2);

library.listAvailableBooks();

const foundBook = library.findBookByTitle("Atomic Habits");
foundBook.borrowBook();
library.listAvailableBooks();

foundBook.returnBook();
library.listAvailableBooks();
