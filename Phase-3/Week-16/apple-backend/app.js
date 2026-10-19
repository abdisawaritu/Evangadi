const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

// ======================================
// Create Express application
// ======================================

const app = express();

// ======================================
// Middleware
// ======================================

// Allow cross-origin requests
app.use(cors());

// Parse data submitted from HTML forms
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Parse JSON data
app.use(express.json());

// ======================================
// MySQL connection
// ======================================

const mysqlConnection = mysql.createConnection({
  user: "mydbuser",

  host: "localhost",

  password: "abdisa",

  database: "mydb",

  port: "8889",
});

// ======================================
// Connect to MySQL
// ======================================

mysqlConnection.connect((error) => {
  if (error) {
    console.error("Database connection failed:");

    console.error(error.message);

    return;
  }

  console.log("Database is connected successfully");
});

// ======================================
// HOME ROUTE
// ======================================

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// ======================================
// CREATE ALL TABLES
// ======================================

app.get("/create-table", (req, res) => {
  // ==================================
  // 1. PRODUCTS TABLE
  // ==================================

  let products = `
        CREATE TABLE IF NOT EXISTS products (
            product_id INT AUTO_INCREMENT,
            product_url VARCHAR(255) NOT NULL,
            product_name VARCHAR(255) NOT NULL,
            PRIMARY KEY (product_id)
        )
    `;

  // ==================================
  // 2. PRODUCT DESCRIPTION TABLE
  // ==================================

  let product_description = `
        CREATE TABLE IF NOT EXISTS product_description (
            description_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            product_brief_description VARCHAR(255) NOT NULL,
            product_description VARCHAR(255) NOT NULL,
            product_img VARCHAR(255) NOT NULL,
            product_url VARCHAR(255) NOT NULL,
            PRIMARY KEY (description_id),
            FOREIGN KEY (product_id)
                REFERENCES products(product_id)
        )
    `;

  // ==================================
  // 3. PRODUCT PRICE TABLE
  // ==================================

  let product_price = `
        CREATE TABLE IF NOT EXISTS product_price (
            price_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            starting_price VARCHAR(50) NOT NULL,
            price_range VARCHAR(255) NOT NULL,
            PRIMARY KEY (price_id),
            FOREIGN KEY (product_id)
                REFERENCES products(product_id)
        )
    `;

  // ==================================
  // 4. USERS TABLE
  // ==================================

  let users = `
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT,
            user_name VARCHAR(100) NOT NULL,
            user_password VARCHAR(255) NOT NULL,
            PRIMARY KEY (user_id)
        )
    `;

  // ==================================
  // 5. ORDERS TABLE
  // ==================================

  let orders = `
        CREATE TABLE IF NOT EXISTS orders (
            order_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            user_id INT NOT NULL,
            PRIMARY KEY (order_id),
            FOREIGN KEY (product_id)
                REFERENCES products(product_id),
            FOREIGN KEY (user_id)
                REFERENCES users(user_id)
        )
    `;

  // ==================================
  // CREATE PRODUCTS
  // ==================================

  mysqlConnection.query(products, (error, results) => {
    if (error) {
      console.log("Error creating products table:", error.message);

      return res.status(500).send("Error creating products table");
    }

    console.log("Products table created successfully");

    // ==================================
    // CREATE PRODUCT DESCRIPTION
    // ==================================

    mysqlConnection.query(product_description, (error, results) => {
      if (error) {
        console.log("Error creating product_description table:", error.message);

        return res.status(500).send("Error creating product_description table");
      }

      console.log("Product description table created successfully");

      // ==================================
      // CREATE PRODUCT PRICE
      // ==================================

      mysqlConnection.query(product_price, (error, results) => {
        if (error) {
          console.log("Error creating product_price table:", error.message);

          return res.status(500).send("Error creating product_price table");
        }

        console.log("Product price table created successfully");

        // ==================================
        // CREATE USERS
        // ==================================

        mysqlConnection.query(users, (error, results) => {
          if (error) {
            console.log("Error creating users table:", error.message);

            return res.status(500).send("Error creating users table");
          }

          console.log("Users table created successfully");

          // ==================================
          // CREATE ORDERS
          // ==================================

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

// ======================================
// ADD PRODUCT + DESCRIPTION + PRICE
// + USER + ORDER
// ======================================

app.post("/add-product", async (req, res) => {
  console.log("Received form data:");
  console.log(req.body);

  // ==================================
  // Get data from request body
  // ==================================

  const {
    product_name,
    product_url,

    product_brief_description,
    product_description,
    product_img,
    product_link,

    starting_price,
    price_range,

    user_name,
    user_password,
  } = req.body;

  // ==================================
  // Validate required information
  // ==================================

  if (
    !product_name ||
    !product_url ||
    !product_brief_description ||
    !product_description ||
    !product_img ||
    !product_link ||
    !starting_price ||
    !price_range ||
    !user_name ||
    !user_password
  ) {
    return res.status(400).send("Please provide all required information.");
  }

  try {
    // ==================================
    // Hash user password
    // ==================================

    const hashedPassword = await bcrypt.hash(user_password, 10);

    // ==================================
    // START DATABASE TRANSACTION
    // ==================================

    mysqlConnection.beginTransaction((transactionError) => {
      if (transactionError) {
        console.log("Transaction could not start:", transactionError.message);

        return res.status(500).send("Could not start database transaction");
      }

      // ==================================
      // 1. INSERT PRODUCT
      // ==================================

      const insertProduct = `
                    INSERT INTO products
                    (product_url, product_name)
                    VALUES (?, ?)
                `;

      mysqlConnection.query(
        insertProduct,

        [product_url, product_name],

        (error, result) => {
          if (error) {
            return mysqlConnection.rollback(() => {
              console.log("Error inserting product:", error.message);

              res.status(500).send("Error inserting product");
            });
          }

          // ==================================
          // GET NEW PRODUCT ID
          // ==================================

          const product_id = result.insertId;

          console.log("Product inserted successfully");

          console.log("New product ID:", product_id);

          // ==================================
          // 2. INSERT PRODUCT DESCRIPTION
          // ==================================

          const insertDescription = `
                            INSERT INTO product_description
                            (
                                product_id,
                                product_brief_description,
                                product_description,
                                product_img,
                                product_url
                            )
                            VALUES (?, ?, ?, ?, ?)
                        `;

          mysqlConnection.query(
            insertDescription,

            [
              product_id,
              product_brief_description,
              product_description,
              product_img,
              product_link,
            ],

            (error, result) => {
              if (error) {
                return mysqlConnection.rollback(() => {
                  console.log(
                    "Error inserting product description:",
                    error.message,
                  );

                  res.status(500).send("Error inserting product description");
                });
              }

              console.log("Product description inserted successfully");

              // ==================================
              // 3. INSERT PRODUCT PRICE
              // ==================================

              const insertPrice = `
                                    INSERT INTO product_price
                                    (
                                        product_id,
                                        starting_price,
                                        price_range
                                    )
                                    VALUES (?, ?, ?)
                                `;

              mysqlConnection.query(
                insertPrice,

                [product_id, starting_price, price_range],

                (error, result) => {
                  if (error) {
                    return mysqlConnection.rollback(() => {
                      console.log(
                        "Error inserting product price:",
                        error.message,
                      );

                      res.status(500).send("Error inserting product price");
                    });
                  }

                  console.log("Product price inserted successfully");

                  // ==================================
                  // 4. INSERT USER
                  // ==================================

                  const insertUser = `
                                            INSERT INTO users
                                            (
                                                user_name,
                                                user_password
                                            )
                                            VALUES (?, ?)
                                        `;

                  mysqlConnection.query(
                    insertUser,

                    [user_name, hashedPassword],

                    (error, result) => {
                      if (error) {
                        return mysqlConnection.rollback(() => {
                          console.log("Error inserting user:", error.message);

                          res.status(500).send("Error inserting user");
                        });
                      }

                      // ==================================
                      // GET NEW USER ID
                      // ==================================

                      const user_id = result.insertId;

                      console.log("User inserted successfully");

                      console.log("New user ID:", user_id);

                      // ==================================
                      // 5. INSERT ORDER
                      // ==================================

                      const insertOrder = `
                                                    INSERT INTO orders
                                                    (
                                                        product_id,
                                                        user_id
                                                    )
                                                    VALUES (?, ?)
                                                `;

                      mysqlConnection.query(
                        insertOrder,

                        [product_id, user_id],

                        (error, result) => {
                          if (error) {
                            return mysqlConnection.rollback(() => {
                              console.log(
                                "Error inserting order:",
                                error.message,
                              );

                              res.status(500).send("Error inserting order");
                            });
                          }

                          console.log("Order inserted successfully");

                          // ==================================
                          // COMMIT TRANSACTION
                          // ==================================

                          mysqlConnection.commit((commitError) => {
                            if (commitError) {
                              return mysqlConnection.rollback(() => {
                                console.log(
                                  "Error committing transaction:",
                                  commitError.message,
                                );

                                res.status(500).send("Error saving data");
                              });
                            }

                            // ==================================
                            // SUCCESS
                            // ==================================

                            console.log("All data inserted successfully");

                            res.send(
                              `
                                                                    <h1>Success</h1>

                                                                    <p>
                                                                        Product, description,
                                                                        price, user, and order
                                                                        were successfully inserted.
                                                                    </p>

                                                                    <p>
                                                                        Product ID:
                                                                        ${product_id}
                                                                    </p>

                                                                    <p>
                                                                        User ID:
                                                                        ${user_id}
                                                                    </p>
                                                                    `,
                            );
                          });
                        },
                      );
                    },
                  );
                },
              );
            },
          );
        },
      );
    });
  } catch (error) {
    console.log("Unexpected error:", error.message);

    res.status(500).send("Something went wrong");
  }
});

// ======================================
// START SERVER
// ======================================

app.listen(3000, (error) => {
  if (error) {
    console.error("Something went wrong with the server:");

    console.error(error.message);

    return;
  }

  console.log("The server is running on port 3000");
});
