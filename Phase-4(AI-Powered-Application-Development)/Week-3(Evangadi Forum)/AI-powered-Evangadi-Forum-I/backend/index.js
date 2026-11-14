import "dotenv/config";
import express from "express";
import { errorHandler } from "./src/middleware/error-handler.js";
import { db } from "./db/config.js";
// import { mainRouter } from "./src/api/routes.js";

import cors from "cors";

const app = express();
const port = process.env.PORT || 3777;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});
  //  main router
// app.use("/api", mainRouter);

app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    // // Test database connection
    const connection = await db.getConnection();

    console.log("Database connection established successfully.");
    connection.release();  //  the connection is released  after  successfully connected.

    app.listen(port, (err) => {
      if (err) {
        console.error("Failed to start the server:", err.message);
        process.exit(1);
      } else {
        console.log(`Server is running on port:  ${port}`);
      }
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

startServer();
