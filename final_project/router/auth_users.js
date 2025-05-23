const express = require("express");
const jwt = require("jsonwebtoken");
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

// Utility function to check if username is valid (not already taken)
const isValid = (username) => {
  return !users.some((user) => user.username === username);
};

// Utility function to check if credentials match a registered user
const authenticatedUser = (username, password) => {
  return users.some(
    (user) => user.username === username && user.password === password
  );
};

// Task 7: Only registered users can login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required." });
  }

  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = jwt.sign({ username }, "access", { expiresIn: "1h" });

  // Save session info
  req.session.authorization = {
    accessToken,
    username,
  };

  return res
    .status(200)
    .json({ message: "Login successful", token: accessToken });
});

// Task 8: Add or modify a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const review = req.query.review;
  const username = req.session.authorization?.username;

  if (!username) {
    return res
      .status(401)
      .json({ message: "Unauthorized. Please login first." });
  }

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found." });
  }

  if (!review) {
    return res.status(400).json({ message: "Review content is required." });
  }

  books[isbn].reviews[username] = review;

  return res
    .status(200)
    .json({
      message: "Review added/updated successfully",
      reviews: books[isbn].reviews,
    });
});

// Task 9: Delete a book review
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = req.session.authorization?.username;

  if (!username) {
    return res
      .status(401)
      .json({ message: "Unauthorized. Please login first." });
  }

  if (!books[isbn] || !books[isbn].reviews[username]) {
    return res.status(404).json({ message: "Review not found for this user." });
  }

  delete books[isbn].reviews[username];

  return res
    .status(200)
    .json({
      message: "Review deleted successfully",
      reviews: books[isbn].reviews,
    });
});

// Export
module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
