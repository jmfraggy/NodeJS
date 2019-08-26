// Server Through Node.js

const http = require('http');

const routes = require('./routes');  

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000); // Event Loop

