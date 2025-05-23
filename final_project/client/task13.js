// task13.js
const axios = require("axios");

const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    console.log(`📗 Books with title containing '${title}':`);
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching books by title:", error.message);
  }
};

getBooksByTitle("Things");
