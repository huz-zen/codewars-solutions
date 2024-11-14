// const url = require("url");

// const myURL = new URL("https://example.com:8080/path/page?name=John&age=30");

// // Access parts of the URL
// console.log("Protocol:", myURL.protocol); // https:
// console.log("Hostname:", myURL.hostname); // example.com
// console.log("Port:", myURL.port); // 8080
// console.log("Pathname:", myURL.pathname); // /path/page
// console.log("Query Parameters:", myURL.searchParams.get("name")); // John
// console.log("Age Parameters:", myURL.searchParams.get("age")); // John

// // Format URL
// myURL.pathname = "/newPath";
// myURL.searchParams.set("name", "Jane");
// myURL.searchParams.set("age", "35");

// console.log("Updated URL:", myURL.toString());


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);