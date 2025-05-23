const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 6 - Register a new user
public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  // FIXED: Check if username is already taken
  if (!isValid(username)) {
    return res.status(409).json({ message: "Username already exists." });
  }

  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully!" });
});

// Task 1 - Get the book list available in the shop
public_users.get("/", function (req, res) {
  return res.status(200).send(JSON.stringify(books, null, 2));
});

// Task 2 - Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (book) {
    return res.status(200).json(book);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

// Task 3 - Get book details based on author
public_users.get("/author/:author", function (req, res) {
  const author = req.params.author;
  const matchingBooks = [];

  for (let isbn in books) {
    if (books[isbn].author.toLowerCase() === author.toLowerCase()) {
      matchingBooks.push({ isbn, ...books[isbn] });
    }
  }

  if (matchingBooks.length === 0) {
    return res.status(404).json({ message: "No books found for this author." });
  }

  return res.status(200).json(matchingBooks);
});

// Task 4 - Get all books based on title
public_users.get("/title/:title", function (req, res) {
  const title = req.params.title.toLowerCase();
  const matchingBooks = [];

  for (let isbn in books) {
    if (books[isbn].title.toLowerCase().includes(title)) {
      matchingBooks.push({ isbn, ...books[isbn] });
    }
  }

  if (matchingBooks.length === 0) {
    return res.status(404).json({ message: "No books found for this title." });
  }

  return res.status(200).json(matchingBooks);
});

// Task 5 - Get book review
public_users.get("/review/:isbn", function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.status(200).json(book.reviews);
});

module.exports.general = public_users;
