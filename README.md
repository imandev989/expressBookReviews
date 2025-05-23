# Online Book Review Application

## Overview

This is a server-side online book review application built with Node.js and Express.js.  
It supports user registration, login with JWT-based session authentication, and allows authenticated users to add, modify, or delete book reviews.  
The application also includes APIs to fetch book details by ISBN, author, or title.

## Features

- User registration and login with JWT authentication
- Adding or modifying book reviews per user per book (by ISBN)
- Deleting a user's own reviews only
- Fetching book lists and details via REST APIs
- Implementation of async-await and Promises in client requests with Axios
- Secure session management and validation

## Project Structure

- `server.js`: Main server file with routes and middleware
- `general.js`: Client-side code using Axios with async-await (Tasks 10-13)
- Other supporting files and folders as per project setup

## Setup and Run

### Prerequisites

- Node.js installed
- npm or yarn package manager
- Git for version control

### Steps to Run

1. Clone the repository or download the project folder.
2. Run `npm install` to install dependencies.
3. Start the server with:

   ```bash
   node server.js

   ```

4. The server will run on http://localhost:5000 (or your specified port).

How to Test the Application

You can use Postman or any API testing tool to test the REST API endpoints.
Authentication

    Register a user: POST /register

    Login a user: POST /login (save the JWT token from the response)

Review Operations

    Add/Modify a review:
    PUT /auth/review/:isbn?review=YourReviewHere
    Pass the JWT token in the Authorization header (Bearer token).
    If the user has already reviewed the book, this will update the review. Otherwise, it will add a new review.

    Delete a review:
    DELETE /auth/review/:isbn
    Only deletes the review posted by the logged-in user for the given ISBN.

Tasks 10-13: Async-Await and Promises with Axios

These tasks are implemented in the general.js file.
Each task has a separate function and should be run individually.
How to Run Tasks 10-13

    Open the project folder and launch the terminal there.

    Edit the general.js file so that only one of the function calls for Tasks 10 to 13 is active (uncomment only one function call and comment out the others).

Example for running Task 10 (Get all books list):

// getAllBooks(); // Task 10
// getBookByISBN(1); // Task 11
// getBooksByAuthor("Unknown"); // Task 12
// getBooksByTitle("Things"); // Task 13

getAllBooks(); // only this line should be active

    Run this command in the terminal:

node general.js

The output will display in the console.
Alternative Method: Running Each Task in Separate Files

You can create separate JavaScript files for each task inside a folder like client (e.g., task10.js, task11.js, task12.js, task13.js), where each file calls only its respective function.

Run each task separately using:

node client/task10.js
node client/task11.js
node client/task12.js
node client/task13.js

This approach helps keep tasks organized and avoids the need to comment/uncomment code repeatedly.
Important Notes

    Run only one task at a time.

    Ensure the server (server.js) is running while executing these client scripts.
