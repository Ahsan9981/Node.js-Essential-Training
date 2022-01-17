const net = require('net');

const server = net.createServer();

let connectedClients = [];

server.listen({
    host: 'localhost',
    port: 8080
})

server.on('connection', (client) => {
    console.log('Client Connected');
    client.write('Welcome to the server.');
    connectedClients.push(client);
});


setInterval(() => {

    const now = new Date().toISOString();

    connectedClients.forEach(client => {
        client.write(now);
    });

}, 5000);