const os = require('os');

console.log(os.userInfo());
console.log(os.platform());
console.log(os.release());
console.log(os.cpus());

console.log(__filename);
console.log(__dirname);

console.log(process.env);