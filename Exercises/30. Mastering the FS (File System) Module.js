// 🏋️‍♂️ Exercise 30: Mastering the FS (File System) Module
// Objective:
// To learn how to read, write, update, and delete files using Node.js fs module.

// Requirements:
// Basic Setup:

// Create a new file called fsExercise.js.
// Use the fs module in your script: const fs = require('fs');
// Tasks:

// Task 1: Create and Write to a File
// Create a file named sample.txt and write the text: "Hello, this is my first FS module task!".
// Task 2: Read the File
// Read the contents of sample.txt and log the text to the console.
// Task 3: Append Data to the File
// Add the text: " Adding more data using the append method." to the existing file sample.txt.
// Task 4: Rename the File
// Rename sample.txt to renamedSample.txt.
// Task 5: Delete the File
// Delete the file renamedSample.txt.
// Bonus Tasks:

// Task 6: Create a Directory and Write a File Inside
// Create a directory named myFolder.
// Inside myFolder, create a file info.txt with the text: "Directory and File created successfully!".
// Task 7: Delete the Directory and Its Content
// Delete info.txt first and then remove myFolder.
// Concepts Covered:
// fs.writeFile() - Writing to a file.
// fs.readFile() - Reading a file.
// fs.appendFile() - Appending data to a file.
// fs.rename() - Renaming a file.
// fs.unlink() - Deleting a file.
// fs.mkdir() - Creating a directory.
// fs.rmdir() - Deleting a directory.
// Instructions:
// Use fs module methods both in synchronous and asynchronous ways.
// Log relevant messages on each step to know what's happening.
// Example Output:


// File created and written successfully!
// File content: Hello, this is my first FS module task!
// Data appended successfully!
// File renamed successfully!
// File deleted successfully!
// Directory and file created successfully!
// Directory deleted successfully!
// Testing:
// Run your script using node fsExercise.js and check the console and file system for expected results.


const fs = require("fs")

fs.writeFileSync("sample.txt", "Hello, this is my first FS module task!");
console.log("File created and written successfully!")

const data = fs.readFileSync("sample.txt", "utf-8");
console.log("File content:", data);

fs.appendFileSync("sample.txt", " Adding more data using the append method.")
console.log("Data appended successfully!")


fs.renameSync("sample.txt", "renamedSample.txt")
console.log("File renamed successfully!")

fs.unlinkSync("renamedSample.txt")
console.log("File deleted successfully!")


// bonus

fs.mkdirSync("myfolder");

fs.writeFileSync("myfolder/info.txt", "Directory and File created successfully!")
console.log("Directory and file created successfully!")

// recursive:true means subdirectory in directory
fs.rmSync("myfolder", {recursive: true})
console.log("Directory deleted successfully!")