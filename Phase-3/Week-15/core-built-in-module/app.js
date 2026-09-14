// // const os = require("os");
// // // console.log(os)// to see what we export from os module in  the form of object importnat points is here object manipulation
// // // console.log(os.platform());
// // // console.log(os.homedir());
// // // console.log(os.type());
// // // // console.log(os.cpus())
// // // console.log(os.arch());
// // // console.log(os.type())
// // // console.log(os.release())
// // // console.log(os.uptime())
// // // console.log(os.userInfo())
// // // console.log(os.cpus().length);
// // // console.log(os.totalmem());
// // const totalMemory = os.totalmem();

// // console.log((totalMemory / 1024 / 1024 / 1024).toFixed(2) + " GB");
// // console.log(os.freemem());
// // const freeMemory = os.freemem();

// // console.log((freeMemory / 1024 / 1024 / 1024).toFixed(2) + " GB");
// // console.log(os.tmpdir());
// // console.log(os.hostname());
// // const uptime = os.uptime();

// // console.log((uptime / 60 / 60).toFixed(2) + " hours");
// // import os from "os ";  by using ES modules

// // console.log(os.freemem()) /
// //   console.log((freeMemory / 1024 / 1024 / 1024).toFixed(2) + " GB");

// // fs module
// // import fs from "fs";

// const fs = require("fs");
// // // reading a file
// // // const data = fs.readFileSync("data.txt", "utf8");
// // // console.log(data);
// // // const data = fs.readFileSync("data.txt", "utf8");

// // // console.log(data);
// // // console.log("Done");

// // fs.readFile("data.txt", "utf8", (err, data) => {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   }

// //   console.log(data);
// // });

// // console.log("Done");

// // creating /writing a file   writeFileSync()

// // fs.writeFileSync("message.txt", "Hello Node.js");
// // fs.writeFileSync("message.txt", "First message");
// // fs.appendFileSync("message.txt", "\nAnother message");
// // // fs.mkdirSync("uploads");
// // fs.mkdirSync("uploads/images", { recursive: true });
// // // fs.existsSync("data.txt");
// // if (fs.existsSync("data.txt")) {
// //   console.log("File exists");
// // } else {
// //   console.log("File does not exist");
// // }
// // const information = fs.statSync("data.txt");

// // console.log(information);

// // const files = fs.readdirSync(".");

// // console.log(files);
// // fs.unlinkSync("new.txt");
// // // fs.rmdirSync("uploads");
// // fs.rmSync("uploads", { recursive: true });
// // // asychronous and sychronous operation
// // writeFile();
// // writeFileSync();

// // appendFile();
// // appendFileSync();

// // mkdir();
// // mkdirSync();

// // readdir();
// // readdirSync();

// // rename();
// // renameSync();

// // unlink();
// // // unlinkSync();

// // reading A file

// fs.readFile("data.txt", "utf8", (err, datat) => {
//   if (err) console.log(err);
// //   console.log(datat.toString());
// // });

// // // write a file
// // fs.writeFile("text.txt", "March Batch", (error) => {
// //   if (error) console.log(error);
// //   console.log("file has been saved");
// // });

// // use case  we use readand write during the server creating

// const path = require("path");
// // import path from "path"

// // const folder = "public";
// // const file = "index.html";

// // // const fullPath = folder + "/" + file;

// // const fullPath = path.join(folder, file);
// // console.log(fullPath)
// // const result = path.join("project", "images", "logo.png");
// // console.log(result)

// // const filePath = path.join( __dirname , "public"  , "index.html")
// // console.log(filePath)

// // const result = path.parse("/project/images/logo.png");

// // console.log(result);
// // // path modules
// // console.log(__filename)
// // console.log(__dirname)  // global variable

// // Os module
// // const os = require("os");

// // console.log("platform", os.platform());
// // console.log("Os Name", os.type());
// // console.log("CPU Architecture", os.arch());
// // console.log("Cpu cores", os.cpus().length);
// // console.log("System uptime", os.uptime());
// // console.log("Total Memory", os.totalmem());
// // console.log("Free Memory", os.freemem());

// // Path Module

// // global variable

// console.log(__dirname);
// console.log(__filename);

// const filePath = path.join(__dirname, "data.txt");
// console.log("filePath ", filePath);

// const baseName = path.basename(filePath);
// console.log("baseName", baseName);

// //  for the ES6
// // we cant get the global pro like fileNae and dirName
// // instead we use the ff to get the file path

// const dirName = path.dirname(filePath);
// console.log("Directory name ", dirName);

// URL NOde MOdule
// is the built  in Node.js module that provides functionality for :
//    - parsing the URLs
//    - creaing URLs , MOdifyingURL
//    - extracting information from the URLs
//    - Working with query paramters

// npm install url we done need this
// Importing the url mode  using the commonJs
const url = require("url");

const myUrl = new URL("https://example.com/products?id=25&category=phone");

console.log("Protocol:", myUrl.protocol);
console.log("Hostname:", myUrl.hostname);
console.log("Port:", myUrl.port);
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Search:", myUrl.search);

console.log("Product ID:", myUrl.searchParams.get("id"));
console.log("Category:", myUrl.searchParams.get("category"));
for (const [key, value] of myUrl.searchParams) {
  console.log(key, value);
}
// to create the a URL
const myU = new URL("https://example.com");

// events Module
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", () => {
  console.log("User logged in");
});

emitter.emit("login");

emitter.on("eventName", listenerFunction);
// emitter.emit("login"); used for triggering of an event

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("login", (username) => {
//   console.log(`${username} logged in`);
// });

// emitter.emit("login", "Abdi");

// events are sychronous  operation

// using the ES6  module verstion
// import EventEmitter from "events "
// const emitter = new EventEmitter();
