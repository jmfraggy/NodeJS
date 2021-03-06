// Server Through Node.js
// Use npm start
// In scripts, add start with the file
// Use npm run for other scripts 

const http = require('http');

const routes = require('./routes');  

console.log(routes.someText);
const server = http.createServer(routes.handler);
 
server.listen(3000); // Event Loop

// Logical error can be solved with Debugging
// Debugging can be restarted adding:
// "restart": true,
// "runtimeExecutable": "nodemon",
// "console": "integratedTerminal"