// 🔥 Exercise 32: Combining Middleware, FS, and Path Modules 🔥

// Objective:
// This exercise will help you understand how to use middleware, and how to handle file operations using fs and path modules in a single Express.js application.

// Requirements:
// Setup:

// Create a new file named exercise32.js.
// Initialize an Express app.
// Use fs and path modules

// Tasks:

// Task 1: Middleware for Logging Requests

// Create a middleware function that logs the date, time, and the requested URL to a file called logs.txt.
// Every time a request is made to the server, this middleware should write a new log line in the file.
// Task 2: Create and Serve a Static File

// Create a route /create-file that uses the fs module to create a new file info.txt in a data folder (use path module to resolve the path).
// The content of the file should be: "This is a test file created using FS and Path modules."
// If the file is successfully created, send a JSON response { "message": "File created successfully!" }.
// Task 3: Read and Send the File Content

// Create a route /read-file that reads the content of info.txt and sends it back as a JSON response like { "content": "file content here..." }.
// If the file does not exist, send a response { "message": "File not found!" }.
// Task 4: Append Data to the File

// Create a route /append-file that appends " - Appended data using fs.appendFileSync()" to info.txt.
// Send a response { "message": "Data appended successfully!" }.
// Task 5: Rename the File Using Path Module

// Create a route /rename-file that renames info.txt to info-renamed.txt.
// Use the path module to construct the old and new file paths.
// Send a response { "message": "File renamed successfully!" }.
// Task 6: Error Handling Middleware

// Add a global error handling middleware to catch any errors and send a response { "error": "An error occurred!" }.
// Bonus:

// Add a 404 handler that catches unknown routes and sends a response { "message": "Route not found" }.
// Concepts Covered:
// Express Middleware (Custom and Error Handling)
// Using fs and path modules
// Creating, reading, updating, and renaming files
// Path manipulation using path module
// Error handling in Express


// Testing Instructions:
// Check logs: Open logs.txt to see the logs.
// Routes:
// GET /create-file: Creates the file.
// GET /read-file: Reads and shows file content.
// GET /append-file: Appends data to the file.
// GET /rename-file: Renames the file.
// GET /unknown: Triggers the 404 handler.


const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    let currentdate = new Date();
    let currenttime = new Date().toLocaleTimeString();
    let currentURL = req.url
    console.log(currentURL)

    fs.appendFile("logs.txt", `Current date: ${currentdate}\nCurrent time: ${currenttime}\nCurrentURL:${currentURL}\n\n`, (err) => {
        if (err) {
            console.error('Error writing to logs file:', err);
        }
    });

    next();
});


app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/create-file", (req, res) => {
    fs.mkdirSync("data", { recursive: true })
    fs.writeFile("data/info.txt", "This is a test file created using FS and Path modules.", (err) => {

        let message = { "message": "File created successfully!" }
        if (err) {
            console.error("file does not created")
        } else {
            res.json(message)
        }
    })

})

app.get("/read-file", (req, res) => {
    const filePath = "./data/info.txt";
    const renamedFilePath = "./data/info-renamed.txt";

    if (fs.existsSync(filePath)) {
        let data = fs.readFileSync(filePath, 'utf-8');
        res.send({ content: data });
    } else if (fs.existsSync(renamedFilePath)) {
        let data = fs.readFileSync(renamedFilePath, 'utf-8');
        res.send({ content: data });
    } else {
        res.send({ message: "File not found!" });
    }
});

app.get("/append-file", (req, res)=>{
    fs.appendFile("data\\info.txt", " - Appended data using fs.appendFileSync()", (err)=>{
        if(err){
            res.send("Error in appending")
        }else{
            const message = { "message": "Data appended successfully!" }
            res.json(message)
        }
    })
})


app.get("/rename-file", (req, res) => {
    const oldFilePath = "./data/info.txt";
    const newFilePath = "./data/info-renamed.txt";

    try {
        fs.renameSync(oldFilePath, newFilePath);
        res.json({ "message": "File renamed successfully!" });
    } catch (err) {
        res.json({ "message": "File not found or already renamed!" });
    }
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "An error occurred!" });
    next()
});

app.use((req, res, next)=>{
    res.status(404).json({ "message": "Route not found" })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})