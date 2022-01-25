const express = require('express'); 
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postRouter = require('./routes/post');

const server = express();


dotenv.config();
const port = global.process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB Connected');
});

mongoose.connection.on('error', error => {
    console.log(`DB Coonnection Error: ${error.message}`);
});



// Custom Middleware Definition.
const customMiddleware = (req, res, next) => {
    console.log('This is a custom middleware.');
    next();
}
server.use(morgan('dev'));
server.use(express.json());
server.use(customMiddleware);
server.use('/', postRouter);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});