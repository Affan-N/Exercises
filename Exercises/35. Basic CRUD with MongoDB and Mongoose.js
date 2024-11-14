// Exercise 35: Basic CRUD with MongoDB and Mongoose 🔥

// Objective:
// In this exercise, you'll learn how to interact with MongoDB using Mongoose for basic CRUD operations (Create, Read, Update, Delete) with a simple "Product" model.

// Requirements:
// Setup MongoDB and Mongoose:
// Create a folder for the project and initialize it:
// mkdir exercise35 && cd exercise35 && npm init -y
// Install required packages:
// npm install express mongoose
// Ensure MongoDB is running on your machine (you can use MongoDB Atlas if necessary).
// Tasks:
// Connect to MongoDB Using Mongoose

// Create an Express app and connect to MongoDB using Mongoose.
// Create a Product Schema and Model

// Define a simple schema for a Product with the following fields:
// name (String, required)
// price (Number, required)
// category (String, required)
// Create Product (POST Request)

// Create a POST route /products to add a new product to the database.
// Send a sample product data in the request body and save it to the MongoDB collection.
// Get All Products (GET Request)

// Create a GET route /products that retrieves all products from the database and returns them as JSON.
// Get Product by ID (GET Request)

// Create a GET route /products/:id to fetch a specific product by its ID.
// Handle errors where the product is not found.
// Update Product (PUT Request)

// Create a PUT route /products/:id to update a product’s details (e.g., name, price, category).
// Validate the update and handle errors.
// Delete Product (DELETE Request)

// Create a DELETE route /products/:id to delete a product by its ID.
// Bonus Task:
// Error Handling:
// Add error handling for missing or invalid product data (like missing fields or invalid price).



// Testing Instructions:
// Create a Product:

// Send a POST request to /products with a JSON body like:

// {
//   "name": "Laptop",
//   "price": 1000,
//   "category": "Electronics"
// }
// Get All Products:

// Send a GET request to /products to see all the products in the database.
// Get a Product by ID:

// Send a GET request to /products/:id with an existing product ID.
// Update a Product:

// Send a PUT request to /products/:id with the updated data (e.g., change the price or name).
// Delete a Product:

// Send a DELETE request to /products/:id with the product ID to delete it.
// What You Will Learn:
// How to set up basic CRUD operations with MongoDB and Mongoose in an Express app.
// How to handle errors and validate data in a simple CRUD app.
// How to use Mongoose for creating models and interacting with MongoDB.


const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// MongoDB Connection
async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/MongooseExercise");
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Failed to connect", err.message || err);
    }
}

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
});

const Product = mongoose.model("Product", schema);

connectToDatabase();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

// Create Product
app.post('/products', async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const newProduct = new Product({ name, price, category });
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully!', product: newProduct });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get Product by ID
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Product
app.put("/products/:id", async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, category },
            { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete Product
app.delete("/products/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
