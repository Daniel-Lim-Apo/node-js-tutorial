const express = require("express");
const app = express();
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json()); // To parse JSON bodies
app.use("/api", routes); // Use the routes defined in routes.js

// Use the error-handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
