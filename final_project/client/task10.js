// task10.js
const axios = require("axios");

const getAllBooks = async () => {
  try {
    const response = await axios.get("http://localhost:5000/");
    console.log("📚 All Books:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching books:", error.message);
  }
};

getAllBooks();
