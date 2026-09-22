const express = require("express");
const mysql = require("mysql2");
console.log(mysql)

const app = express();

const databaseConnection = mysql.createConnection({
  user: "may22db",
  password: "may22db",
  port: 8889,
  database: "may22db",
  host: "localhost",
});
console.log(databaseConnection)
databaseConnection.connect((error) => {
  if (error) {
    console.log("DB Connection failed");
    console.log(error.message);
  } else {
    console.log("Connected to MySQl database");
  }
});

app.get("/", (req, res) => {
  res.send("Up and running ");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
