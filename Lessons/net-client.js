const net = require('net');

const client = net.createConnection({port: 8080});

client.on('data', (data) => {
    console.log(`Message recieved from server: ${data} `);
});