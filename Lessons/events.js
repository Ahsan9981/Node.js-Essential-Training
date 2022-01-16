const EventEmitter = require('events');
const fs = require('fs');

let usersLoggedIn = 0;

const eventEmitter = new EventEmitter();


eventEmitter.on('userLoggedIn', () => {
    usersLoggedIn++;
    console.log(`Currently ${usersLoggedIn} users are logged in.`);
});

eventEmitter.emit('userLoggedIn');

const watcher = fs.watch('events.js');

watcher.on('change', () => {
    console.log('File updated');
});