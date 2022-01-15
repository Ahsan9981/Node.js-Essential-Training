const fs = require('fs');

// Reading a file synchronously.
const data = fs.readFileSync('system.js');
console.log(data.toString());

// Creating a file synchronously.
if (fs.existsSync('data.txt')) {
    fs.writeFileSync('data.txt', 'Hello World');
}

// Append data to the existing file.
fs.appendFileSync('data.txt', '\nAppended data.');

// Copy a file.
fs.copyFileSync('data.txt', 'data.bak.txt');

// Rename a file.
fs.renameSync('data.bak.txt', 'data.old.txt');

// Delete a file.
fs.unlinkSync('data.old.txt');

// Read directory.
console.log(fs.readdirSync(__dirname));

// Create directory.
fs.mkdirSync('file-system');

// Move a file to a directory.
fs.renameSync('data.txt', 'file-system/data.txt');