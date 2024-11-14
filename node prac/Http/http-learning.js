const http = require("http");

// Create an HTTP server

const server = http.createServer((req,res) => {
  res.writeHead(200,{"content-type":"text/plain"});
  res.write("Hello, Zentech");
  res.end();
});

server.listen(1000, () =>{  
  console.log("Server running on http://localhost:1000")
})