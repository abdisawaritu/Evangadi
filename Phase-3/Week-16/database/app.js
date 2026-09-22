const express = require("express");
const mysql = require("mysql2");
// console.log(mysql);

const app = express();

const databaseConnection = mysql.createConnection({
  user: "may22db",
  password: "may22db",
  port: 8889,
  database: "may22db",
  host: "localhost",
});
// console.log(databaseConnection);
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

// https verbs and sql query works togethers

//

let name = `CREATE TABLE IF NOT EXISTS customers   (
    customer_id  INT AUTO_INCREMENT  , 
    name  VARCHAR (255)  NOT NULL,
    PRIMARY KEY (customer_id)
)`;

let address = `CREATE TABLE IF NOT EXISTS address   (
    address_id  INT AUTO_INCREMENT  , 
    customer_id  INT (11)  NOT NULL,
    address VARCHAR(255)  NOT NULL,
    PRIMARY KEY (address_id),
    FOREIGN KEY  (customer_id)  REFERENCES  customers(customer_id)
)`;

let company = `CREATE TABLE IF NOT EXISTS company  (
    company_id  INT AUTO_INCREMENT  , 
    customer_id  INT (11)  NOT NULL,
    company VARCHAR(255)  NOT NULL,
    PRIMARY KEY (company_id),
    FOREIGN KEY  (customer_id)  REFERENCES  customers(customer_id)
)`;
