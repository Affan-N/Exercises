// Exercise 31: Mastering the Path Module
// Objective:
// Understand how to work with file and directory paths using Node.js' path module.

// Requirements:
// Basic Setup:

// Create a new file called pathExercise.js.
// Use the path module in your script:
// js
// Copy code
// const path = require('path');
// Tasks:

// Task 1: Join Paths
// Use path.join() to combine multiple segments into a single path. For example:
// Combine the folder name myFolder and the file name file.txt into a single path:
// myFolder/file.txt.

// Task 2: Get the File Extension
// Use path.extname() to get the extension of a file.
// Example: For example.txt, it should return .txt.

// Task 3: Get the Base Name
// Use path.basename() to extract the filename from a path.
// Example: For /home/user/myFolder/file.txt, it should return file.txt.

// Task 4: Get the Directory Name
// Use path.dirname() to extract the directory path from a full file path.
// Example: For /home/user/myFolder/file.txt, it should return /home/user/myFolder.

// Task 5: Resolve an Absolute Path
// Use path.resolve() to resolve a sequence of paths into an absolute path.
// Example: For path.resolve('myFolder', 'file.txt'), it should give an absolute path based on the current directory.

// Task 6: Normalize a Path
// Use path.normalize() to standardize a path, eliminating any redundant or unnecessary parts of it.
// Example: For myFolder//file.txt, it should normalize to myFolder/file.txt.

// Bonus Task:

// Task 7: Check if Path is Absolute
// Use path.isAbsolute() to check whether a given path is absolute.
// Example: For /home/user/myFolder, it should return true, and for myFolder/file.txt, it should return false.

// Concepts Covered:
// path.join()
// path.extname()
// path.basename()
// path.dirname()
// path.resolve()
// path.normalize()
// path.isAbsolute()
// Testing:
// Run your script and check the output to verify that all the tasks are working as expected.
// Each task should log the correct value in the console.




const path = require('path');

const fullPath = path.join('myFolder', 'file.txt');
console.log('Joined path: ', fullPath);

let extname = path.extname(`D:\\My Exercises\\Exercises\\31. Mastering the Path Module.js`)
console.log("File extension: " + extname)

let basename = path.basename(`D:\\My Exercises\\Exercises\\31. Mastering the Path Module.js`)
console.log("File baseName: " + basename)


let dirname = path.dirname(`D:\\My Exercises\\Exercises\\31. Mastering the Path Module.js`)
console.log("File directory name: " + dirname)


let resolvePath = path.resolve('myFolder', 'file.txt')
console.log("File resolve path: " + resolvePath)


const normalizedPath = path.normalize('myFolder//file.txt');
console.log('Normalized Path:', normalizedPath);


if(path.isAbsolute(`D:\\My Exercises\\Exercises\\31. Mastering the Path Module.js`)){
    console.log(true)
}else{
    console.log(false)
}