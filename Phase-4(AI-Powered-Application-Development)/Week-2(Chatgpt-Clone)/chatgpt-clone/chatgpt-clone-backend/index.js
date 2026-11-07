import express from "express";
// console.log(express)

const app = express();
// console.log(app);

function logger(req, res) {
  const url = req.url;
  const method = req.method;
  console.log(`Received a ${method} request to the endpoint: ${url}`);
  res.send("from logger middleware");
  // next();
}

// preparing the endpoint
// GET request to the root endpoint
// during the GET request, the server will respond with a message "Hello from the backend!"
//
// request response cycle: the client sends a request to the server, and the server sends back a response. In this case, the client is making a GET request to the root endpoint ("/"), and the server is responding with a message "Hello from the backend!".
// between the request and response  there is middleware that can be used to process the request and response. In this case, there is no middleware being used, but in a real application, you might use middleware to handle things like authentication, logging, or error handling. on the middleware  we write the logic

app.get("/", logger,  (req, res) => {
  

  res.send("Hello from the backend!");
});

app.get("/about", logger,  (req, res) => {
 
  res.json({ message: "Hello from the backend!  from the about routes" });  // this is a json response, which is a common format for sending data between a client and a server. In this case, the server is responding with a JSON object that contains a message property with the value "Hello from the backend!  from the about routes".   the express does now allow us to respond twice  since the logger function is sending a response, we cannot send another response in the same request.  if we want to send a response from the logger function, we should not send another response in the route handler.  if we want to send a response from the route handler, we should not send a response in the logger function.  we can use next() to pass control to the next middleware function in the stack, but in this case, we are not using next() so the request will end after the logger function sends a response.
});

app.get("/api/chat", (req, res) => {
 
  res.json({ message: "Hello from the backend!  from the chat routes" });
});


app.get("/api/conversation", logger,  (req, res) => {
  res.json({
    message: "Hello from the backend!  from the conversation routes",
  });
});
app.get("/api/conversation/:id", logger,  (req, res) => {
  const conversationId = req.params.id;
  res.json({
    message: `Hello from the backend!  from the conversation routes with id: ${conversationId}`,
  });
});




app.listen(3000, () => {
  console.log("Server is running on port 3000  : http://localhost:3000");
});
