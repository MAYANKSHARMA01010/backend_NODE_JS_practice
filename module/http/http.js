// sudo npm install -g nodemon --------> install the nodemon globall and used nodemon http/http.js in package.locker
// it will auto restart my server whenever we change anything and save the file no need to stop and restart it again and again 

const http = require('http');
const fs = require('fs');
const { error } = require('console');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // it will give the path after 3000
    console.log(req.url);

    // Log the request method
    console.log("First request received");

    // Set Header
    res.writeHead(200, { 'Content-Type': 'Mayank' });

    // Read File and routing
    if (req.url === "/doggy") {
        fs.readFile('DOGGY.jpeg',(error,data)=>{
            res.end(data)
        })
    }
    else if (req.url === '/website') {
        fs.readFile('index.html',(error,data)=>{
            res.end(data)
        })
    }
    else {
        res.end(`Page Not Found`);
    }
    
    // End the Server only one time we can end the server
    // res.end(`Hello, How are you?`);
});

server.listen(PORT, () => {
    console.log(`✅ Server is listening on port ${PORT}`);
    console.log(`🌐 Open: http://localhost:${PORT}`);
});
