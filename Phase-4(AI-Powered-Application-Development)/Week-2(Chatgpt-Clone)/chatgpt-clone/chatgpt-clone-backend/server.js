import express from "express";
import connectDB from "./db/db.config.js";
const app = express();

app.post("/api/conversation", (req, res) => {
  res.send(
    "Hello from the backend!  from the conversation routes POST request",
  );
});

app.get("/api/chat/conversation", (req, res) => {
  res.json({
    message:
      "Hello from the backend!  from the conversation routes  and get request ",
  });
});

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
