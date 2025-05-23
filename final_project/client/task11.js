// task11.js
const axios = require("axios");

const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    console.log(`📘 Book with ISBN ${isbn}:`);
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching book by ISBN:", error.message);
  }
};

getBookByISBN(1);
