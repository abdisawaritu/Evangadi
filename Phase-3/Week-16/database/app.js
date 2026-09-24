const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
// console.log(mysql);

const app = express();
app.use(cors()); // the backend can accepts aany request that come with frontend without breaking the rule of the cors cross origin  resourece sharing  we can also make the backedn to reply  to some specific endpoints that to the  request all the  frontend sended

// middle ware to extract information from the html body  name attribute of the form

app.use(express.urlencoded({ extended: true })); // this is the middleware to extract information  from the html body name attribute of the form then the data are placed on the request body after gettting the data  from name attribue   we gonna insert the  data to the tables this middle ware  only from the html requestion not from the json  or js  only data from the html is extracted

app.use(express.json()); // we use this middle ware to extract from the  frontend   and store it on the  body
// prepareing the name based on the documentation  of the to communicated and agreements

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
}); // TO get the confirmation on the terminals

app.get("/", (req, res) => {
  res.send("Up and running ");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});

// https verbs and sql query works togethers

// Create the tables inside the given databases ;

//

// TO EXECTURE OR RUN THE TABLE WE USE THE CONNECTION

// WITHOUT THE ROUTES
// Create Table
// CRUD OPERATIOIN

// #1 .Route : /add-customer     => to insert  customer  inot the tables

app.post("/add-customer", (req, res) => {
  console.log(req.body);

  // we can destruction the object of req.body
  // extraction from the req.body using the object destruction

  const { name, address, company } = req.body;

  // here the primary key is the auto_increments

  // best practice to use parameterized  quries to prevent the sql injection and also to maie more securea nd effience t
  // ?  its a place holder for the values  we want  to insert,  and the values is passed  as an array in the second argeument of the query method
  // parametrised  queries

  let insertCustomerName = `INSERT  INTO customers  (name)   values  (?)`;
  let insertAddress = `INSERT  INTO  address  (customer_id , city)   values  (? , ?)`;
  let insertCompany =
    "INSERT  INTO  company  (customer_id , company)   values  (? , ?)";
  // executing the query by the similar method with the tables  creatin
  databaseConnection.query(
    insertCustomerName,
    [name],
    (error, result, fields) => {
      if (error) {
        console.log(error);
      } else {
        let id = result.insertId;
        databaseConnection.query(
          insertAddress,
          [id, address],
          (error, result, fields) => {
            if (error) {
              console.log(error);
            }
          },
        );
        databaseConnection.query(
          insertCompany,
          [id, company],
          (error, result, fields) => {
            if (error) console.log(error);
          },
        );
      }
    },
  );

  res.send("the form received");
});

//  #2. Route : /cusomters  => to retrieve  data from the tables
app.get("/customers", (req, res) => {
  let customers = `select  * from customers  JOIN address JOIN  company ON customers.customers_id =  address.customer_id  and customers.customers_id  = company.customer_id`;

  databaseConnection.query(customers, (error, results, fields) => {
    if (error) console.log(error);
    else {
      res.send(results);
    }
  });
});

//  #3 .Route : /update  =>  to updated the data from the databases tables end points  at the backend
app.put("/update", (req, res) => {
  const { newName, id } = req.body;
  // let update  `update  customers set name = ${newName}  where customer_id  = ${id}`

  databaseConnection.query(update, (err) => {
    if (err) console.log(err);
    else {
      res.send("Updated successfully");
    }
  });
});

//  #4 . /remove-user   =>  to delete all data from table

app.delete("/delete"   , (req,res)=>{

  const {id}  = req.body;
  // let delete = `delete from customers where customer_id   =  `${id}`
  // let deleteaddress = `delete from address where customer-ID  = ${id}`

  // let deltetcompany = `detelet from comapuy wher cusote_id ` ${id}

  // deleting in reverse order  the order of the deletion is matters most during inserta as well the deltation of the dat from databas and to the database

  //  databaseConnection.query (delete , (error) =>{
  //   if (error) console.log(error)
  //  })
  // databaseConnection.query (deleteADDress , (error) =>{
  //   if (error) console.log(error)
  //  })
  // databaseConnection.query (deleteComanry , (error) =>{
  //   if (error) console.log(error)
  //  })


})

app.get("/create-table", (req, res) => {
  let customer = `CREATE TABLE IF NOT EXISTS customers   (
    customer_id  INT AUTO_INCREMENT   , 
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

  databaseConnection.query(customer, (error) => {
    if (error) console.log(error);
  });

  databaseConnection.query(address, (error) => {
    if (error) console.log(error);
  });
  databaseConnection.query(company, (error) => {
    if (error) console.log(error);
  });
  res.send("Table created");

  // app.get("/create-table", (req, res) => {
  //   const customer = `
  //   CREATE TABLE IF NOT EXISTS customers (
  //     customer_id INT AUTO_INCREMENT,
  //     name VARCHAR(255) NOT NULL,
  //     PRIMARY KEY (customer_id)
  //   )
  // `;

  //   const address = `
  //   CREATE TABLE IF NOT EXISTS address (
  //     address_id INT AUTO_INCREMENT,
  //     customer_id INT NOT NULL,
  //     address VARCHAR(255) NOT NULL,
  //     PRIMARY KEY (address_id),
  //     FOREIGN KEY (customer_id)
  //       REFERENCES customers(customer_id)
  //   )
  // `;

  //   const company = `
  //   CREATE TABLE IF NOT EXISTS company (
  //     company_id INT AUTO_INCREMENT,
  //     customer_id INT NOT NULL,
  //     company VARCHAR(255) NOT NULL,
  //     PRIMARY KEY (company_id),
  //     FOREIGN KEY (customer_id)
  //       REFERENCES customers(customer_id)
  //   )
  // `;

  //   // 1. Create customers first
  //   databaseConnection.query(customer, (error) => {
  //     if (error) {
  //       console.log("Customer table failed:", error);
  //       return res.status(500).send("Failed to create customers table");
  //     }

  //     // 2. Only after customers succeeds, create address
  //     databaseConnection.query(address, (error) => {
  //       if (error) {
  //         console.log("Address table failed:", error);
  //         return res.status(500).send("Failed to create address table");
  //       }

  //       // 3. Only after address succeeds, create company
  //       databaseConnection.query(company, (error) => {
  //         if (error) {
  //           console.log("Company table failed:", error);
  //           return res.status(500).send("Failed to create company table");
  //         }

  //         // 4. Only after all three succeed
  //         res.send("All tables created successfully");
  //       });
  //     });
  //   });
  // });
});

// app.get("/create-table", async (req, res) => {
//   try {
//     const customer = `
//             CREATE TABLE IF NOT EXISTS customers (
//                 customer_id INT AUTO_INCREMENT,
//                 name VARCHAR(255) NOT NULL,
//                 PRIMARY KEY (customer_id)
//             )
//         `;

//     const address = `
//             CREATE TABLE IF NOT EXISTS address (
//                 address_id INT AUTO_INCREMENT,
//                 customer_id INT NOT NULL,
//                 address VARCHAR(255) NOT NULL,
//                 PRIMARY KEY (address_id),
//                 FOREIGN KEY (customer_id)
//                     REFERENCES customers(customer_id)
//             )
//         `;

//     const company = `
//             CREATE TABLE IF NOT EXISTS company (
//                 company_id INT AUTO_INCREMENT,
//                 customer_id INT NOT NULL,
//                 company VARCHAR(255) NOT NULL,
//                 PRIMARY KEY (company_id),
//                 FOREIGN KEY (customer_id)
//                     REFERENCES customers(customer_id)
//             )
//         `;

//     await databaseConnection.query(customer);

//     await databaseConnection.query(address);

//     await databaseConnection.query(company);

//     res.status(201).send("Tables created successfully");
//   } catch (error) {
//     console.error(error);

//     res.status(500).send("Failed to create tables");  // this is  the modern approach to create the tables using async-await
//   }
// });

// we need to insert the data to the table from the frontend
// using the post request from the  frontend then store it on the table
// the form can be simple html
// the form to property action  and method
// we use post request  to request to the webser   what page process the data at the server  where to send and why which method to send
// write the post request that handle the post data  write the hanlder function
// app.post()

// customery registr form
//  We need the route
//  to communicate api  we need a documenetation for the real world appliction

//#  API   documentation for the customer management system
//  this document provides  an overview of the REST FULL api  endpoints for the cusomter  managment systes. this api allow for the creaeteion retrrevial , updateing and deleetion of the cusomere information  which includes ther name , address and assoicatie compary.  for ther agreement between fronted and backend

// selection of the dat from the tables  and fetch the given data on the fronted       by taking the data from the database using the selection query  and get  requeestion from the backend node js of the expreess

//SELECT  the data from the  data base and fetch tha  data on the frontend

// we use selection   to see the data and fetch to the frontend
