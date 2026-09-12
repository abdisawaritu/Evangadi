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
// console.log(fs)
fs.writeFileSync("hello.txt", "hello NOde.js");
