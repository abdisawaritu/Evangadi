const mysql = require("mysql2");
const express = require("express");
// console.log(mysql)
// create  the connection to database
app = express();

const connection = mysql.createConnection({
  user: "abdisa",
  host: "localhost",
  password: "25502658",
  database: "mydatabase",
  port: "8889",
});

// step 4  connect
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("Connected Succesfully");
  }
});

app.get("/", (req, res) => {
  res.send("Hello , world");
});

app.listen(3001, (error) => {
  console.log("server is running on : https://");
});
