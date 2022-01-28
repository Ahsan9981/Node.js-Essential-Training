const app = require('express')();

app.get('/', (request, response) => { response.send('Home')});
app.get('/login', (request, response) => { response.send('Login')});
app.get('/register', (request, response) => { response.send('Register')});

app.listen(3000, () => { console.log('server is listening at port 3000')});