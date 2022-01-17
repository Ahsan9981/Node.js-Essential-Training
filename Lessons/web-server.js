const http = require('http');

const server = http.createServer((request, response) => {


    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`<h1>Hello ${request.url.slice(1)}</h1>`);

});

server.listen(8080, 'localhost');