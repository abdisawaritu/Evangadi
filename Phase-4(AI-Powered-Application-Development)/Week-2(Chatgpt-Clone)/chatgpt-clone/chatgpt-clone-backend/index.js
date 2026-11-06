import express from "express";

const app = express();

function logger(req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`Received a ${method} request to the endpoint: ${url}`);
  next();
} 
// preparing the endpoint
// GET request to the root endpoint
// during the GET request, the server will respond with a message "Hello from the backend!"
//
// request response cycle: the client sends a request to the server, and the server sends back a response. In this case, the client is making a GET request to the root endpoint ("/"), and the server is responding with a message "Hello from the backend!".
// between the request and response  there is middleware that can be used to process the request and response. In this case, there is no middleware being used, but in a real application, you might use middleware to handle things like authentication, logging, or error handling. on the middleware  we write the logic

app.get("/", (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(`Received a ${method} request to the root endpoint: ${url}`);
  res.send("Hello from the backend!");
});

app.get("/about", (req, res) => {
  res.json({ message: "Hello from the backend!  from the about routes" });
});

app.get("/api/chat", (req, res) => {
  res.json({ message: "Hello from the backend!  from the chat routes" });
});

app.get("/api/conversation", (req, res) => {
  res.json({
    message: "Hello from the backend!  from the conversation routes",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000  : http://localhost:3000");
});
