const express = require("express");
const mysql = require("mysql2");

const app = express();

const mysqlConnection = mysql.createConnection({
  user: "mydbuser",
  host: "localhost",
  password: "abdisa",
  database: "mydb",
  port: "8889",
});

mysqlConnection.connect((error) => {
  if (error) {
    console.error("Database connection failed:");
    console.error(error.message);
    return;
  }

  console.log("Database is connected successfully");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, (error) => {
  if (error) {
    console.error("Something went wrong with the server:");
    console.error(error.message);
    return;
  }

  console.log("The server is running on port 3000");
});
