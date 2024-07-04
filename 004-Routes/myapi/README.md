This project is a simple API with Node.js

To replicate from Zero:

mkdir myapi
cd myapi
npm init -y

npm install express

Create app.js:
/////////////////////
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//////////////////

To use Routes:
Update your app.js to include routes for creating, reading, updating, and deleting users.

//////////**************
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data to act as a database
let users = [
  { id: 1, name: "Maria Julia" },
  { id: 2, name: "Jorge Henrique" },
];

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API!');
});

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update an existing user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//////////**************




To run use
node .\app.js

To use/test:

use a api client to test:
[Postman](https://www.postman.com/)

or

[Thunder-client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

or

[Humao Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

or

[Insomnia](https://insomnia.rest/download)

Try with, p ex:

Get all users: GET http://localhost:3000/users

Get a user by ID: GET http://localhost:3000/users/1

Create a new user: POST http://localhost:3000/users with JSON body { "name": "New User" }

Update a user: PUT http://localhost:3000/users/1 with JSON body { "name": "Updated User" }

Delete a user: DELETE http://localhost:3000/users/1

