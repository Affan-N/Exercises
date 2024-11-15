// 🔥 Exercise 36: Building a Simple E-Commerce Page (Frontend & Backend) 🔥

// Objective: In this exercise, you'll create a basic e-commerce page using HTML, CSS, JavaScript, and Node.js with Express. The page will allow users to view products, add them to a cart, and check out. This exercise will focus on keeping things simple while learning the fundamentals of creating an e-commerce page.

// Requirements:

// Setup the project:

// Create a folder for the project: mkdir exercise36 && cd exercise36
// Initialize the project: npm init -y
// Install the required packages:

// npm install express
// Frontend (HTML, CSS, JS):

// Create a simple e-commerce page with the following sections:
// Header: Display the title of your website, like "My E-Commerce Store".
// Product List: Display a list of products (for simplicity, use 3-5 products). Each product should have:
// An image (You can use placeholders like "https://via.placeholder.com/150")
// A name, price, and an "Add to Cart" button.
// Shopping Cart: Display a cart at the bottom or in a modal, which shows products added to the cart.
// Checkout Button: Allow users to click on the "Checkout" button to finalize their order (the button can just log the cart to the console for simplicity).
// Style the page using CSS.
// Backend (Node.js with Express):

// Create a simple backend using Express to serve your HTML page.
// Set up routes for serving the homepage (/) and adding products to the cart.
// You don't need to store data in a database for this exercise; just manage the cart in memory.
// Tasks:

// Task 1: Serve the HTML page (GET /)
// Create a route that serves the HTML page when visiting the root URL (/).
// Task 2: Add products to the cart (POST /add-to-cart)
// Create a route to simulate adding products to the cart. The cart can be stored as a simple array in the server.
// When a product is added, the cart array should be updated.
// Task 3: Checkout (GET /checkout)
// Create a route to handle checkout. This will simply return the cart contents in the response.
// Bonus Task (Optional):

// Styling: Add custom styling to make the website look more professional (e.g., use flexbox or grid for layout).
// Persistent Cart (Optional): For a more advanced version, you could save the cart data in a file or use local storage to keep the cart even after refreshing the page.
// Testing Instructions:

// Run your Express app and open it in the browser.
// Check that the product list is displayed.
// Click "Add to Cart" and ensure that the cart updates.
// Use the checkout button to see the cart contents in the console.



const express = require("express");
const app = express();
const port = 4000;
const path = require("path");


app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})