// Exercise 27: Express Basics - Hello World API
// Objective:
// Learn basic setup of Express.js.
// Create a simple "Hello World" API.
// Requirements:
// Setup:

// Install Express.js using: npm install express.
// Create a basic server:

// Set up a server running on localhost:3000.
// Create an API endpoint:

// Create a GET route /hello that responds with {"message": "Hello, welcome to my Express server!"}.
// Test your API:

// Open a browser or use Postman to hit /hello and check the result.
// Concepts Covered:
// Basics of Express.js
// Setting up a server
// Handling GET requests
// Sending a JSON response
// Bonus:
// Add another GET route /greet/:name to greet the user. For example, if you visit /greet/Affan, it should respond with {"message": "Hello, Affan!"}.



const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    console.log(req)
    res.send("Hello World!")
})

app.get("/hello", (req, res)=>{
    let message = {"message": "Hello, welcome to my Express server!"}
    res.send(message)
})

app.get("/greet/:name", (req, res)=>{
    let name = req.params.name;
    let message = {"message": "Hello, " + name + "!"}
    res.send(message)
})

app.listen(port , ()=>{
    console.log(`Server running at http://localhost:${port}`)
})