const http = require("http");
// console.log(http);

// http.createServer([optio] , requestHandler(listener))
// this method  turns a computer into an HTTP server

const server = http.createServer((req, res) => {
  //   console.log(req.headers);
  //   console.log(req.url);
  //   console.log(req.method);

  // what about on the response object
  res.write("<h1> Hello world  </h1>");
  res.write("<h1> Hello world  </h1>");
  res.write("<h1> Hello world  </h1>");
//   res.end();

  res.end("<h1> May Batch  </h1>");

  //   res.end("Hello there ");
});

server.listen(3000);
