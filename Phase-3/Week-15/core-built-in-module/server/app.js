// // const http = require("http");
// // // console.log(http);

// // // http.createServer([optio] , requestHandler(listener))
// // // this method  turns a computer into an HTTP server

// // const server = http.createServer((req, res) => {
// //   //   console.log(req.headers);
// //   // console.log(req.url);
// //   //   console.log(req.method);

// //   // what about on the response object
// //   // res.write("<h1> Hello world  </h1>");
// //   // res.write("<h1> Hello world  </h1>");
// //   // res.write("<h1> Hello world  </h1>");
// //   // //   res.end();
// //   // res.setHeader("content-type", "text/html");
// //   // res.writeHead(200, { "content-type": "text/html" });
// //   // res.end("");

// //   //   res.end("Hello there ");

// //   if (req.url === "/") {
// //     res.writeHead(200, { "content-type": "text/html" });
// //     res.write("<h1> Home Page  </h1>");
// //     res.end();
// //   } else if (req.url === "/about") {
// //     res.write("<h1> About Page </h1>");
// //   } else {
// //     res.write("<h1> Page Not Found</h1>");
// //   }
// //   res.end();
// // });

// // server.listen(3000);

// // How to serve the static page  using the webserver

// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const mimetypelookup = require("mime-types").lookup;
// // const { zstdCompress } = require("zlib");
// // const server = http.createServer((req, res) => {
// //   let filePath = req.url;
// //   if (req.url === "/") {
// //     filePath = "index.html"; // the default is index.html from home page by default server index html serving the static page using the http module , fs module , and path modules
// //   }
// //   let requestedPath = path.join(__dirname, "html", filePath);
// //   let notFoundPath = path.join(__dirname, "html", "Nof-found.html");
// //   fs.readFile(requestedPath, (error, content) => {
// //     if (error) {
// //       fs.readFile(notFoundPath , "utf8"  ,  (err , data)=>{
// //         if(err){
// //           console.log(error)
// //         } else{
// //           res.writeHead(404, { "content-type": "text/html" });
// //           res.end(data)
// //         }
// //       });
// //     } else {
// //       res.writeHead(200, { "content-type": "text/html" });
// //       res.end(content);
// //     }
// //   });
// //   // console.log(requestedPath );
// // });
// // server.listen(3000, () => {
// //   console.log("Listening on http://localhost:3000");
// // });

// // Serving puppy Page
// const puppyServer = http.createServer((req, res) => {
//   let filePath = req.url;
//   if (filePath === "/") {
//     filePath = "/index.html";
//   }

//   let requestedFile = path.join(__dirname, "puppyPage", filePath);
//   fs.readFile(requestedFile, (error, content) => {
//     if (error) {
//       filePath = "Nof-found.html";
//       let page404 = __dirname + "/puppyPage/" + filePath;
//       fs.readFile(page404, function (error, contents) {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.end(contents);
//       });
//     } else {
//       let fileType = mimetypelookup(requestedFile);
//       res.writeHead(200, { "content-type": fileType });
//       res.end(content);
//     }
//   });
// });
// puppyServer.listen(3000, () => {
//   console.log("Puppy server is running on PORT:  http://localhost:3000");
// });

const express = require("express");

const app = express(); // to create server  or the appliction creating the server appliction throught the express module and framework

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("the server is running on port :3000 http://locahost:3000 ");
});
