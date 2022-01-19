const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {

    // fs.readFile('./index.html', (error, data) => {

    //     if (error) throw error;
    //     response.end(data);
    // });

    const stream = fs.createReadStream('./index.html');
    console.log(stream);
    stream.pipe(response);

}).listen(8080, 'localhost');