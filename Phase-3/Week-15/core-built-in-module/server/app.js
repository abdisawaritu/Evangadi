const http = require("http");
// console.log(http);

// http.createServer([optio] , requestHandler(listener))
// this method  turns a computer into an HTTP server

const server = http.createServer((req, res) => {
  res.end("Hello there ");
});

server.listen(3000, function () {
  console.log("It is Listening");
});
