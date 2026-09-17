// const http = require("http");
// // console.log(http);

// // http.createServer([optio] , requestHandler(listener))
// // this method  turns a computer into an HTTP server

// const server = http.createServer((req, res) => {
//   //   console.log(req.headers);
//   // console.log(req.url);
//   //   console.log(req.method);

//   // what about on the response object
//   // res.write("<h1> Hello world  </h1>");
//   // res.write("<h1> Hello world  </h1>");
//   // res.write("<h1> Hello world  </h1>");
//   // //   res.end();
//   // res.setHeader("content-type", "text/html");
//   // res.writeHead(200, { "content-type": "text/html" });
//   // res.end("");

//   //   res.end("Hello there ");

//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1> Home Page  </h1>");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("<h1> About Page </h1>");
//   } else {
//     res.write("<h1> Page Not Found</h1>");
//   }
//   res.end();
// });

// server.listen(3000);

// How to serve the static page  using the webserver

const http = require("http");
