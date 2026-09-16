const http = require("http");
const { random } = require("./randomNumber");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  //   const randomNum = random();
  if (req.url === "/about.html") {
    let filePath = path.join(
      __dirname,
      "static",
      "apple-html-css-replica",
      "about.html",
    );

    // console.log(filePath);
    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(500);
        res.end("somethings wrong");
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("File NOt Found");
  }
});
server.listen(5000, (error) => {
  if (error) {
    console.log("something wrong", error);
  } else {
    console.log("server running ");
  }
});

//steps
// 1 npm init
// 2 npm  init -y  to install 
// 3. npm install express

// const express = require("express");
// const servers  = express();// creating the applictiono 
// servers.get("/"   ,   (req, res)=>{
//   res.send("Request received and prossed")
// })

// servers.listen(1234 , ()=>{
//   console.log("server is running ");
// })
