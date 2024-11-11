// Exercise 29: Understanding Middleware in Express
// Objective:
// Learn how to create and use middleware functions in Express. Understand the order of execution of middleware and how to create custom middleware for specific tasks.

// Requirements:
// Basic Setup:

// Set up an Express server.
// Middleware Tasks:

// Log Middleware: Create a middleware that logs the current date and time of each incoming request.
// Authorization Middleware: Create a custom middleware that checks if the user is authorized (for simplicity, you can check if a query parameter authorized=true exists).
// Error Handling Middleware: Create a custom middleware to catch and handle errors (this middleware should return a JSON error message).
// Routes:

// Create a simple route / that returns "Hello World".
// Create a route /welcome that only works if the authorized=true query parameter is passed.
// Bonus:

// Add a 404 route for handling unknown routes (if the user visits a route that does not exist, return a custom "Page not found" error).
// Instructions:
// Log Middleware: The log middleware will log each incoming request along with the date and time.
// Authorization Middleware: The authorize middleware checks if the query parameter authorized=true is passed. If not, it returns a 403 Forbidden response.
// Error Handling: A global error handling middleware that catches errors and sends a 500 Internal Server Error message.
// 404 Middleware: Handles all unknown routes and returns a 404 Not Found message.
// Testing Your API:
// Visit http://localhost:3000/ to see the "Hello World!" message.
// Visit http://localhost:3000/welcome?authorized=true to see the authorized message.
// Visit http://localhost:3000/welcome without the query parameter to see the unauthorized message.
// Visit any non-existent route (e.g., http://localhost:3000/nonexistent) to see the 404 message.
// Concepts Covered:
// Global Middleware: Understanding how middleware runs for every request.
// Custom Middleware: Creating and using custom logic for handling specific tasks like authorization.
// Error Handling Middleware: How to manage errors in your app globally.
// Order of Middleware Execution: The order in which middleware is executed is important—ensure the correct order when creating multiple middlewares.
// Bonus Challenge:
// Add logging for both successful and failed authorization attempts in the authorize middleware.
// Handle multiple error scenarios like invalid JSON requests or database connection issues.


const express = require("express");
const app = express();
const port = 3000;


app.use((req, res, next) => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    console.log(`Current Date and Time: ${currentDate}`);
    console.log(`Current Time: ${currentTime}`);
    next();
});


const auth = (req, res, next) => {
    const isAuthorized = req.query.authorized === 'true';
    if (isAuthorized) {
        console.log("Authorized access granted.");
        next();
    } else {
        console.log("Unauthorized access attempt.");
        return res.status(403).json({ message: "You cannot access the page" });
    }
};


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.get("/welcome", auth, (req, res) => {
    res.send("Welcome to the authorized page!");
});


app.use((err, req, res, next) => {
    console.error("Error occurred:", err.message);
    res.status(500).json({ message: "Something went wrong!" });
});


app.use((req, res) => {
    res.status(404).json({ message: "404: Page not found" });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
