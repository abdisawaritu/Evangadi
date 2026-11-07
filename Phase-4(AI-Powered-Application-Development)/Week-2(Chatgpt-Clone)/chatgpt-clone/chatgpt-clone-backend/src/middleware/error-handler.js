export const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res
    .status(500)
    .json({
      error: "Internal Server Error",
      statu: "false",
      Message: "something went wrong",
    });
};
