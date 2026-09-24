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
  console.log("server is running on : https://localhost:3001");
});

// how to create the database using the sql languages

// Create all the tables

app.get("/create-table", (req, res) => {
  // puttin the query on the varialbe
  let customers = `CREATE TABLE  IF NOT EXISTS  customers (
  customer_id  INT  auto_increment,
  name  varchar (255)  not null , 
  PRIMARY KEY   (customer_id) 
  )`;

  let address = `CREATE TABLE  IF NOT EXISTS  address (
   address_id INT  auto_increment,
    customer_id  int(11) not null , 
    address  varchar (255)  not null,
  PRIMARY KEY   (address_id) ,
  FOREIGN KEY  (customer_id)  REFERENCES customers  (customer_id)
  )`;

  let company = `CREATE TABLE IF NOT EXISTS  company  (
       company_id   int auto_increment , 
       customer_id  int(11)    not null, 
       company varchar(255)  not null, 
       PRIMARY KEY (company_id) , 
       FOREIGN   KEY  (customer_id)  REFERENCES   customers(customer_id)
  )`;

  // executing  the querys  wr wrote  above

  connection.query(customers, (error, result, field) => {
    if (error) {
      console.log(`Error Found ${error}`);
    }
  });

  connection.query(address, (error, result, field) => {
    if (error) {
      console.log(`Error Found ${error}`);
    }
  });
  connection.query(company, (error, result, field) => {
    if (error) {
      console.log(`Error Found ${error}`);
    }
  });
  res.send("Tables Created Successfully");
});
