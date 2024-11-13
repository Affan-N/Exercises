// 🔥 Exercise 33: Mastering EJS Templates with Express 🔥

// Objective:
// This exercise aims to help you understand how to use EJS (Embedded JavaScript) templates with an Express.js application. You'll learn how to render dynamic content using EJS and understand its basic features like variables, loops, and conditionals.

// Requirements:
// Create a new file named exercise33.js.
// Initialize an Express app.
// Set up EJS as the template engine.
// Create a views folder for your EJS files.
// Tasks:
// Task 1: Set Up EJS as the Template Engine
// Configure the Express app to use EJS as its template engine.
// Use the views folder to store all EJS files.
// Task 2: Render a Home Page
// Create a GET route / that renders a home.ejs template.
// In the views folder, create a file named home.ejs.
// In home.ejs, display a welcome message: "Welcome to the EJS Template Exercise!".
// Task 3: Pass Data to EJS Template
// Create a route /about that renders an about.ejs template.
// In the views folder, create a file named about.ejs.
// Pass an object containing title and description to the template:

// title: "About Us"
// description: "This is the about page using EJS."
// Display the title and description in the EJS template.
// Task 4: Display a List of Items Using Loops
// Create a route /items that renders an items.ejs template.
// In the views folder, create a file named items.ejs.
// Send an array of items from the route to the template:

// const items = ["Apple", "Banana", "Mango", "Orange"];
// Use a loop in items.ejs to display each item in an unordered list.
// Task 5: Conditional Rendering in EJS
// Create a route /user/:name that renders a user.ejs template.
// Fetch the name parameter from the URL and pass it to the template.
// In user.ejs, display "Welcome Admin!" if the name is admin, otherwise show "Hello, [name]".
// Bonus Task: Serve Static Files
// Create a public folder and add a style.css file.
// Include style.css in your home.ejs file and add some basic styling (e.g., change background color or font size).
// Concepts Covered:
// Setting up the EJS template engine with Express
// Rendering templates and passing dynamic data
// Using EJS loops and conditionals
// Serving static files in an Express app
// Testing Instructions:
// Open http://localhost:3000/ to check if the home page is rendering.
// Visit http://localhost:3000/about to verify the title and description.
// Go to http://localhost:3000/items to see the list of items.
// Visit http://localhost:3000/user/Affan to check the personalized message.
// Visit http://localhost:3000/user/admin to confirm the admin message is displayed.

const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.set("view engine", "ejs")

// 'views' Express ko yeh batata hai ke template files (jaise HTML ya EJS files) kahan milengi.
// path.join(__dirname, 'views') se yeh specify hota hai ke yeh views folder aapke current directory ke andar hai.
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.render("home.ejs")
})


app.get('/about', (req, res) => {

  res.render("about.ejs", { title: "About Us", description: "This is the about page using EJS." })
})

app.get('/items', (req, res) => {
  const items = ["Apple", "Banana", "Mango", "Orange"];
  res.render("items.ejs", { items });
});

app.get('/user/:name', (req, res) => {
  const name = req.params.name
  res.render("user.ejs", { name })
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})