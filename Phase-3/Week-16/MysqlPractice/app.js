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

app.get("/create-table", (req, res) => {
  let products = `
    CREATE TABLE IF NOT EXISTS products (
      product_id INT AUTO_INCREMENT,
      product_url VARCHAR(255) NOT NULL,
      product_name VARCHAR(255) NOT NULL,
      PRIMARY KEY (product_id)
    )
  `;

  let product_description = `
    CREATE TABLE IF NOT EXISTS product_description (
      description_id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      product_brief_description VARCHAR(255) NOT NULL,
      product_description VARCHAR(255) NOT NULL,
      product_img VARCHAR(255) NOT NULL,
      product_url VARCHAR(255) NOT NULL,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    )
  `;

  let product_price = `
    CREATE TABLE IF NOT EXISTS product_price (
      price_id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      starting_price VARCHAR(50) NOT NULL,
      price_range VARCHAR(255) NOT NULL,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    )
  `;

  let users = `
    CREATE TABLE IF NOT EXISTS users (
      user_id INT AUTO_INCREMENT,
      user_name VARCHAR(100),
      user_password VARCHAR(255),
      PRIMARY KEY (user_id)
    )
  `;

  let orders = `
    CREATE TABLE IF NOT EXISTS orders (
      order_id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      user_id INT,
      PRIMARY KEY (order_id),
      FOREIGN KEY (product_id) REFERENCES products(product_id),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    )
  `;

  // 1. Create products table
  mysqlConnection.query(products, (error, results) => {
    if (error) {
      console.log("Error creating products table:", error.message);
      return res.status(500).send("Error creating products table");
    }

    console.log("Products table created successfully");

    // 2. Create product_description table
    mysqlConnection.query(product_description, (error, results) => {
      if (error) {
        console.log("Error creating product_description table:", error.message);
        return res.status(500).send("Error creating product_description table");
      }

      console.log("Product description table created successfully");

      // 3. Create product_price table
      mysqlConnection.query(product_price, (error, results) => {
        if (error) {
          console.log("Error creating product_price table:", error.message);
          return res.status(500).send("Error creating product_price table");
        }

        console.log("Product price table created successfully");

        // 4. Create users table
        mysqlConnection.query(users, (error, results) => {
          if (error) {
            console.log("Error creating users table:", error.message);
            return res.status(500).send("Error creating users table");
          }

          console.log("Users table created successfully");

          // 5. Create orders table
          mysqlConnection.query(orders, (error, results) => {
            if (error) {
              console.log("Error creating orders table:", error.message);
              return res.status(500).send("Error creating orders table");
            }

            console.log("Orders table created successfully");

            res.send("All tables successfully created");
          });
        });
      });
    });
  });
});
