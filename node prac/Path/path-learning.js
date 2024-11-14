const path = require("path");

const filePath = __dirname;

console.log("Current directory", __dirname);

console.log("Directory:", path.dirname(filePath));

// Get the file name
console.log("File Name:", path.basename(filePath));

// Join multiple segments
const fullPath = path.parse("/Users/zeeshansikander/Desktop");
console.log("Parsed Path:", fullPath);
