# Customer App

A small full-stack CRUD app built during the Evangadi May-22 Batch, Phase 3 live class.
It stores customers in a MySQL database across three related tables and exposes them
through an Express API, with a plain HTML/CSS/JavaScript frontend.

---

## Features

- **Create** a customer with a name, address, and company
- **Read** all customers as a joined list (ID, name, address, company)
- **Update** a customer's name by ID
- **Delete** a customer (and their address and company rows) by ID
- **Create the tables** from the API, so no manual SQL is needed to get started

---

## Tech Stack

| Layer    | Technology                                      |
| -------- | ----------------------------------------------- |
| Frontend | HTML, CSS, vanilla JavaScript, Bootstrap 5 (CDN) |
| Backend  | Node.js, Express 5                               |
| Database | MySQL (via `mysql2` connection pool)             |
| Other    | `cors`, `dotenv`                                 |

---

## Project Structure

```
customer-app/
├── backend/
│   ├── index.js                 # Express server + all routes
│   ├── seed_10_customers.sql    # Sample data: 10 customers
│   ├── database-structure.svg   # Diagram of the three tables
│   ├── .env                     # DB credentials (not committed)
│   └── package.json
└── frontend/
    ├── index.html               # New / List / Edit / Delete forms
    ├── style.css                # Custom styles on top of Bootstrap
    └── js/
        └── script.js            # Fetch calls to the API
```

---

## Database Structure

Three tables, with `address` and `company` each linked back to `customers`
by a `customer_id` foreign key:

```
customers                address                    company
---------                -------                    -------
customer_id  (PK)  <──┐  address_id   (PK)     ┌──> company_id  (PK)
name                  └─ customer_id  (FK)     │    customer_id (FK)
                         address               │    company
                                               │
                         (one customer) ───────┘
```

See [database-structure.svg](backend/database-structure.svg) for the full diagram.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A running MySQL server (XAMPP, MAMP, WAMP, or a standalone MySQL install)
- A database created for this app, e.g.:

  ```sql
  CREATE DATABASE customer_app;
  ```

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Configure the environment

Create a `.env` file inside `backend/` with your own MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=customer_app

# optional, defaults to 3001
PORT=3001
```

> `.env` and `node_modules/` are listed in `.gitignore` — never commit your credentials.

**Mac users:** if the connection fails, uncomment the `socketPath` line in
[backend/index.js](backend/index.js) and point it at your MySQL socket, for example
`/Applications/MAMP/tmp/mysql/mysql.sock`.

### 3. Start the server

```bash
npm start
```

You should see:

```
Server running on: http://localhost:3001
Connected to MySQL database
```

### 4. Create the tables

Visit <http://localhost:3001/create-table> once in the browser. This creates the
`customers`, `address`, and `company` tables if they don't already exist.

### 5. (Optional) Load sample data

Run [seed_10_customers.sql](backend/seed_10_customers.sql) in phpMyAdmin or the MySQL
CLI to insert 10 example customers:

```bash
mysql -u root -p customer_app < seed_10_customers.sql
```

### 6. Open the frontend

Open [frontend/index.html](frontend/index.html) in your browser — the Live Server
VS Code extension works well here. The page talks to the API at
`http://localhost:3001`, and CORS is already enabled on the backend.

---

## API Reference

Base URL: `http://localhost:3001`

| Method   | Endpoint                 | Body                          | Description                                  |
| -------- | ------------------------ | ----------------------------- | -------------------------------------------- |
| `GET`    | `/`                      | —                             | Health check, returns `Hello World`           |
| `GET`    | `/create-table`          | —                             | Creates the three tables if they don't exist  |
| `POST`   | `/insert-customers-info` | `{ name, address, company }`  | Adds a customer and their address and company |
| `GET`    | `/customers`             | —                             | Returns all customers, joined                 |
| `PUT`    | `/update`                | `{ id, newName }`             | Updates a customer's name                     |
| `DELETE` | `/remove-user`           | `{ id }`                      | Deletes a customer and their related rows     |

### Example: add a customer

```bash
curl -X POST http://localhost:3001/insert-customers-info \
  -H "Content-Type: application/json" \
  -d '{"name":"Abel Bekele","address":"Bole Road, Addis Ababa","company":"Google"}'
```

### Example: list customers

```bash
curl http://localhost:3001/customers
```

```json
[
  {
    "id": 1,
    "name": "Abel Bekele",
    "address": "Bole Road, Addis Ababa",
    "company": "Google"
  }
]
```

---

## Using the Frontend

Four buttons at the top of the page switch between views:

- **New** — form to insert a new customer
- **List** — table of all customers currently in the database
- **Edit** — update a customer's name by their ID
- **Delete** — remove a customer by their ID

---

## Notes and Known Limitations

This is a teaching project, so some things are deliberately kept simple:

- **Every query is parameterized.** Values always go through `?` placeholders and a
  values array — never pasted into the SQL string. This is the pattern to follow in
  real projects, because string-built SQL is open to SQL injection.
- `/customers` uses a `LEFT JOIN`, so a customer still shows up in the list even if
  they have no address or company row yet (those columns come back as `null`).
- Deletes remove the `address` and `company` rows before the `customers` row,
  because the foreign keys point back at `customers`.
- Each route sends **one** response, and only after its queries have finished — so a
  failure reports a real error instead of a false "success".
- There is still no authentication, and validation only checks that required fields
  are present.
- The port defaults to `3001`; set `PORT` in `.env` to change it.

---

## Troubleshooting

| Problem                             | Try this                                                              |
| ----------------------------------- | --------------------------------------------------------------------- |
| `Database connection failed`        | Check MySQL is running and the `.env` values are correct               |
| Tables not found                    | Visit `/create-table` before using the other routes                    |
| Frontend shows nothing on **List**  | Confirm the server is running and there is data in the database        |
| CORS error in the browser console   | Make sure requests point at `http://localhost:3001`                    |
