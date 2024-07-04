### 1. Install Node.js and npm

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. npm (Node Package Manager) is included with Node.js and is essential for managing packages and dependencies.

1. Download Node.js:

   - Visit the [official Node.js website](https://nodejs.org/) and download the LTS (Long Term Support) version.

2. Install Node.js:

   - Run the downloaded installer and follow the prompts.
   - Verify the installation by running the following commands in your terminal:

   ```sh
   node -v
   npm -v
   ```

### 2. Initialize a Node.js Project

1. Create a Project Directory:

   - Open your terminal and create acd my    new directory for your project.

   ```sh
   mkdir my-node-project
   cd my-node-project
   ```

2. Initialize npm:

   - Initialize a new Node.js project by running:

   ```sh
   npm init -y
   ```

   - This command will create a `package.json` file with default settings.

### 3. Create a Simple Node.js Application

1. Create the Main Application File:

   - Create a file named `index.js` in your project directory.

   ```sh
   touch index.js
   ```

2. Write a Simple HTTP Server:

   - Open `index.js` and add the following code to create a simple HTTP server:

   ```js
   const http = require("http");

   const hostname = "127.0.0.1";
   const port = 3000;

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("Hello, World!\n");
   });

   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

3. Run the Application:

   - Start your server by running the following command in your terminal:

   ```sh
   node index.js
   ```

   - Open your web browser and navigate to `http://127.0.0.1:3000/`. You should see "Hello, World!" displayed on the page.

### 4. Installing and Using Packages

1. Install a Package:

   - Install the `express` package to simplify server creation:

   ```sh
   npm install express
   ```

2. Modify Your Application to Use Express:

   - Update `index.js` to use Express for handling HTTP requests:

   ```js
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}/`);
   });
   ```

3. Run Your Updated Application:

   - Start your server again:

   ```sh
   node index.js
   ```

   - Open your web browser and navigate to `http://localhost:3000/`. You should see "Hello, World!" displayed.

### 5. Useful Commands

- Installing a package:

  ```sh
  npm install <package-name>
  ```

- Uninstalling a package:

  ```sh
  npm uninstall <package-name>
  ```

- Running a script defined in `package.json`:

  ```sh
  npm run <script-name>
  ```

### 6. Next Steps

1. Learn More About Node.js:

   - Explore the [Node.js documentation](https://nodejs.org/en/docs/).

2. Learn About Express:

   - Check out the [Express documentation](https://expressjs.com/).

3. Explore Other Packages:
   - Visit the [npm website](https://www.npmjs.com/) to discover popular packages.
