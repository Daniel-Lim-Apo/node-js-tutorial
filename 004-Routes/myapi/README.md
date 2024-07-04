This project is a simple API with Node.js

To run use
node .\app.js

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
