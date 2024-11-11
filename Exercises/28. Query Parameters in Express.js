// Exercise 28: Query Parameters in Express
// Objective:
// Learn how to handle query parameters and use them to customize the response.

// Requirements:
// Basic Setup:
// Set up an Express server (like the previous exercise).
// API Endpoint:
// Create a GET route /search that accepts query parameters.
// For example, a query like /search?name=John&age=30 should return a JSON object like:
// { "message": "Searching for John, aged 30" }
// Handling Missing Parameters:
// If the name or age parameter is missing, return a message like:
// { "message": "Missing query parameters" }
// Bonus:
// Add a default message for when no parameters are provided, like:
// { "message": "Please provide a search query." }


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/search", (req, res) => {
    // name and age are the object keys and query are the values that we provide
    
    const {name , age} = req.query;

    if(name === undefined && age === undefined){
        let message = { "message": "Please provide a search query." }
        res.send(message)
    }

    if(!name || !age){
        let message = { "message": "Missing query parameters" }
        res.send(message)
    }else{
        let message = { "message": "Searching for "+ name + " aged " + age }
        res.send(message);
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})