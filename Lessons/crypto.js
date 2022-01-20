const crypto = require('crypto');

// Using md5 cryptography algorithm.
const md5Hash = crypto.createHash('md5').update('Ahsan').digest('hex');
console.log(md5Hash);

// Using SHA cryptography algorithm.
const secret_key = 'password';
const shaHash = crypto.createHmac('sha256', secret_key).update('Love3Brooke').digest('hex');
console.log(shaHash);