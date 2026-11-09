export const errorHandler = (err, req, res, next) => {
  console.error("Error in Request:", err.message);
  res.status(err.status || 500).json({
    status: "false",
    Message: err.message || "something went wrong",
  });
};
