const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const server = express();

const indexRouter = require('./routes/index');
const PORT = 3000;

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');


server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(session({
    secret:'session-secret-key',
    resave: false,
    saveUninitialized: false
 }))

server.use('/', indexRouter);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});