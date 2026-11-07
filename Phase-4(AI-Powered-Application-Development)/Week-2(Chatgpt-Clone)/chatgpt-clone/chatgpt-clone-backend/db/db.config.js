import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "chatgpt-admin",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "chatgpt-clone",
  port: process.env.DB_PORT || 8889,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export default db;
