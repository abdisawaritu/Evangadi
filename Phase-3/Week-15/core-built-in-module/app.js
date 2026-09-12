// const os = require("os");
// // console.log(os)// to see what we export from os module in  the form of object importnat points is here object manipulation
// // console.log(os.platform());
// // console.log(os.homedir());
// // console.log(os.type());
// // // console.log(os.cpus())
// // console.log(os.arch());
// // console.log(os.type())
// // console.log(os.release())
// // console.log(os.uptime())
// // console.log(os.userInfo())
// // console.log(os.cpus().length);
// // console.log(os.totalmem());
// const totalMemory = os.totalmem();

// console.log((totalMemory / 1024 / 1024 / 1024).toFixed(2) + " GB");
// console.log(os.freemem());
// const freeMemory = os.freemem();

// console.log((freeMemory / 1024 / 1024 / 1024).toFixed(2) + " GB");
// console.log(os.tmpdir());
// console.log(os.hostname());
// const uptime = os.uptime();

// console.log((uptime / 60 / 60).toFixed(2) + " hours");
// import os from "os ";  by using ES modules

// console.log(os.freemem()) /
//   console.log((freeMemory / 1024 / 1024 / 1024).toFixed(2) + " GB");

// fs module
// import fs from "fs";

const fs = require("fs");
// // reading a file
// // const data = fs.readFileSync("data.txt", "utf8");
// // console.log(data);
// // const data = fs.readFileSync("data.txt", "utf8");

// // console.log(data);
// // console.log("Done");

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(data);
// });

// console.log("Done");

// creating /writing a file   writeFileSync()

// fs.writeFileSync("message.txt", "Hello Node.js");
// fs.writeFileSync("message.txt", "First message");
// fs.appendFileSync("message.txt", "\nAnother message");
// // fs.mkdirSync("uploads");
// fs.mkdirSync("uploads/images", { recursive: true });
// // fs.existsSync("data.txt");
// if (fs.existsSync("data.txt")) {
//   console.log("File exists");
// } else {
//   console.log("File does not exist");
// }
// const information = fs.statSync("data.txt");

// console.log(information);

// const files = fs.readdirSync(".");

// console.log(files);
// fs.unlinkSync("new.txt");
// // fs.rmdirSync("uploads");
// fs.rmSync("uploads", { recursive: true });
// // asychronous and sychronous operation
// writeFile();
// writeFileSync();

// appendFile();
// appendFileSync();

// mkdir();
// mkdirSync();

// readdir();
// readdirSync();

// rename();
// renameSync();

// unlink();
// // unlinkSync();

fs.readFile("data.txt", "utf8", (err, datat) => {
  if (err) console.log(err);
  console.log(datat.toString());
});

// write a file
fs.writeFile("text.txt", "March Batch", (error) => {
  if (error) console.log(error);
  console.log("file has been saved");
});
