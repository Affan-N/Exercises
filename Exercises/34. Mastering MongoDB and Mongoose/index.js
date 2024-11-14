// 🔥 Exercise 34: Mastering MongoDB and Mongoose 🔥
// Objective:
// Understand how to use MongoDB with Mongoose in an Express application. Learn about schemas, models, and basic CRUD operations.

// Setup:
// Create a folder for the project and initialize it:

// mkdir exercise34
// cd exercise34
// npm init -y
// Install the required packages:
// npm install express mongoose
// Make sure MongoDB is running on your machine. If not installed, you can use MongoDB Atlas for a cloud-based database.
// Tasks:
// Task 1: Setting up MongoDB and Mongoose
// Create a new file exercise34.js.
// Connect your Express app to MongoDB using Mongoose.
// Use a local MongoDB URI (e.g., mongodb://127.0.0.1:27017/exerciseDB) or a MongoDB Atlas URI.
// Task 2: Creating a Mongoose Schema and Model
// Create a schema for a "User" collection with the following fields:
// name (String, required)
// age (Number, required)
// email (String, unique, required)
// Create a model using this schema.
// Task 3: Create User (POST Request)
// Set up a POST route /users to create a new user.
// Validate data before saving and handle any errors.
// Task 4: Get All Users (GET Request)
// Create a GET route /users to fetch all users from the database.
// Task 5: Get User by ID (GET Request)
// Create a GET route /users/:id to fetch a specific user by their ID.
// Handle cases where the user is not found.
// Task 6: Update User (PUT Request)
// Create a PUT route /users/:id to update a user’s details (name, age, email).
// Validate input and handle errors.
// Task 7: Delete User (DELETE Request)
// Create a DELETE route /users/:id to delete a user from the database.
// Respond with a success message.
// Bonus Task: Error Handling and Mongoose Validation
// Add error handling for invalid Object IDs and unique email constraints.
// Test validation by trying to create users with missing fields or duplicate emails.
// Testing Instructions:
// Use Postman or any REST client to test the CRUD routes.
// Check the MongoDB database to see if the operations are correctly performed.
// Code Structure:
// Your folder structure should look like this:

// exercise34/
// ├── exercise34.js
// ├── models/
// │   └── User.js
// └── package.json

// What You Will Learn:
// Setting up MongoDB with Mongoose in Express
// Creating schemas and models
// Handling CRUD operations
// Error handling and data validation with Mongoose



const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const URI = "mongodb://127.0.0.1:27017/exerciseDB"

async function connection() {
    try {
        let connection = await mongoose.connect(URI)
        console.log("Connection connected successfully")
    } catch (err) {
        console.error("Failed to connect:", err.message || err)
    }
}
connection()


const schema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true }
})
const model = mongoose.model("Login", schema)

async function user() {
    try {
        const userdata = new model({
            name: "Affan",
            age: 17,
            email: "Affan@gmail.com"
        });

        await userdata.save();
        console.log("User data transferred successfully!");
    } catch (err) {
        console.log("Error saving user data:", err);
    }
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/users", async (req, res) => {
    try {
        const user = new model(req.body);
        await user.save();
        res.send("User data transferred successfully");
    } catch (err) {
        res.send("Error in data transferring: " + err.message);
    }
});

app.get("/users", async (req, res) => {
    try {
        const usersdata = await model.find();
        res.json(usersdata);
    } catch (err) {
        res.send("Error fetching users: " + err.message);
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = await model.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.send("Error fetching users: " + err.message);
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const user = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await model.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Invalid User ID' });
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})