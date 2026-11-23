// book.js

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.summary = function () {
  console.log(this.title + " by " + this.author + " has " + this.pages + " pages.");
};

// Example usage
const myBook = new Book("The Hobbit", "J.R.R. Tolkien", 310);
myBook.summary();

const anotherBook = new Book("1984", "George Orwell", 328);
anotherBook.summary();