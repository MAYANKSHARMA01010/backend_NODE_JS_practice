const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end('Hello, How are you?');
});

server.listen(PORT, () => {
    console.log(`✅ Server is listening on port ${PORT}`);
    console.log(`🌐 Open: http://localhost:${PORT}`);
});
