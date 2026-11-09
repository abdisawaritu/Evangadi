import express from "express";
import connectDB from "./db/db.config.js";
import mainRouter from "./src/api/main.routes.js";
import { errorHandler } from "./src/middleware/error-handler.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
// the server requests start from this  points
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api", mainRouter);

app.use(errorHandler);
async function startServer() {
  try {
    const connection = await connectDB.getConnection();
    connection.release(); // Release the connection back to the pool
    console.log("Database connection established successfully.");
    console.log("Connected to the database successfully.");
    app.listen(3000, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Server is running on http://locahost:3000`);
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
  }
}
startServer();
