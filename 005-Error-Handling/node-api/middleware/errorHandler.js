// errorHandler.js
module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: { message } });

  // Log the error (optional)
  console.error(err);
};
