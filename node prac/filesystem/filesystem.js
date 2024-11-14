// The fs (File System) module in Node.js provides functions to interact with the file system, enabling reading, writing, deleting,
// and manipulating files and directories. This module offers both synchronous and asynchronous methods.

// Asynchronous methods are non-blocking, allowing other code to execute while waiting for file operations to complete.
// Synchronous methods are blocking, meaning they halt the execution of further code until the file operation is completed.
// Use Cases
// The fs module is often used for:

// Logging data to a file.
// Reading configuration files.
// Storing user data in files.
// Loading or saving data to be processed or used in the application.

// asynchronous -> readFile, writeFile
// synchronous -> readFileSync, writeFileSync

const fs = require("fs");



// try {
//   // Synchronous File Read
//   const data = fs.readFileSync("output.txt", "utf8");
//   console.log("File content:", data);

//   // Synchronous File Write
//   fs.writeFileSync("output-sync.txt", data);
//   console.log("Data successfully written to output.txt");
// } catch (err) {
//   console.error("Error:", err);
// }

// console.log("Reading file synchronously...");


//   // Delete the file after appending
//   fs.unlink("output.txt", (err) => {
//     if (err) {
//       console.error("Error deleting file:", err);
//       return;
//     }
//     console.log("File deleted successfully");
//   });


// const { error } = require('console')


// //Async file write
// fs.writeFile('output.txt',"hello",function(err){
//     if (err) throw err;
//     console.log('Data succesfully written to output.txt')
// });


// //Async file read
// fs.readFile('output.txt','utf-8', (err,data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("data:",data)
// });

// fs.appendFile('output.txt',"hi",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data appended");
//     }
// })
