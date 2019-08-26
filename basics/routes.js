const fs = require('fs');

// New Gen Syntax.
// Event driven architecture
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"> <button type "submit"> Send </button> </form></body>');
        res.write('</html>');
        return res.end(); // Can't write anymore  
    } 
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });  
        return req.on('end', () =>{
            const parseBody = Buffer.concat(body).toString(); // Buffer
            const message = parseBody.split('=')[1]; 
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();                    
            }); // writeFileSync block execution of the next line, until it's done
        }); 
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page </title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end(); // Can't write anymore
};

// Single Exporte
// module.exports = requestHandler;

// Multiple Export
module.exports = {
    handler: requestHandler,
    someText: 'Some hard code text'
};

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';