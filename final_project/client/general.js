// general.js -- task 10-13 in one file
const axios = require("axios");

const baseUrl = "http://localhost:5000"; // or your project URL

// Task 10: Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${baseUrl}/`);
    console.log("📚 All Books:", response.data);
  } catch (error) {
    console.error("❌ Error getting all books:", error.message);
  }
}

// Task 11: Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${baseUrl}/isbn/${isbn}`);
    console.log(`📘 Book with ISBN ${isbn}:`, response.data);
  } catch (error) {
    console.error(`❌ Error getting book by ISBN ${isbn}:`, error.message);
  }
}

// Task 12: Get books by Author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${baseUrl}/author/${author}`);
    console.log(`👨‍💻 Books by Author "${author}":`, response.data);
  } catch (error) {
    console.error(`❌ Error getting books by author ${author}:`, error.message);
  }
}

// Task 13: Get books by Title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${baseUrl}/title/${title}`);
    console.log(`📖 Books with Title "${title}":`, response.data);
  } catch (error) {
    console.error(`❌ Error getting books by title ${title}:`, error.message);
  }
}

// Run one of the tasks at a time
// Uncomment only one of the lines below at a time

// getAllBooks();                 // Task 10
// getBookByISBN(1);             // Task 11
// getBooksByAuthor("Unknown");  // Task 12
// getBooksByTitle("Things");    // Task 13
