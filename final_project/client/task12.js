// task12.js
const axios = require("axios");

const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    console.log(`📚 Books by author ${author}:`);
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching books by author:", error.message);
  }
};

getBooksByAuthor("Chinua Achebe");
