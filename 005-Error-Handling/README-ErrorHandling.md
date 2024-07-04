From Zero:

mkdir node-api
cd node-api
npm init -y
npm install express

Create a file named index.js
///////////////////
const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json()); // To parse JSON bodies
app.use('/api', routes); // Use the routes defined in routes.js

// Use the error-handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

///////////////////

Define Routes.

with a file called routes.js
////////////////////////////////
const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
res.send("Hello, world! Everything is good!");
});

// Route that intentionally throws an error
router.get('/BadEndPoint', (req, res, next) => {
const error = new Error('Something went wrong!');
error.status = 500;
next(error); // Pass the error to the error-handling middleware
});

module.exports = router;

////////////////////////////////

Create the error-handling middleware in middleware/errorHandler.js:

//////////////////////////
// errorHandler.js
module.exports = (err, req, res, next) => {
const status = err.status || 500;
const message = err.message || 'Internal Server Error';
res.status(status).json({ error: { message } });

    // Log the error (optional)
    console.error(err);

};

////////////////////////////////

Run with:
node index.js

Try with the following:

http://localhost:3001/api/

http://localhost:3001/api/BadEndPoint

To errors have fun seeing:
https://http.cat/
https://http.dog/
https://httpstatusdogs.com
