const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();

const inputStream = fs.createReadStream('index.html');
const outputStream = fs.createWriteStream('index.html.gz');

inputStream.pipe(gzip).pipe(outputStream);