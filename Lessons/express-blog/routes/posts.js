const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const config = require('../config');
const logger = require('../logger');


const db = new sqlite3.Database(config.databaseName);

router.post('/add-post',(request, response, next) => {

    const { title, author, content } = request.body;
    const date = new Date().toISOString();
    const statement = `INSERT INTO ${config.tableName} (title, date, author, post)
    VALUES ("${title}", "${date}", "${author}", "${content}")`;

    db.serialize(() => {
        db.run(statement, (error) => {

            if (error) {
                logger.error(`An error occured: `, error);
            } else {
                logger.success(`Post added successfully.`);
            }
            
        });
        response.redirect('/?submitted=true');
        db.close();
    });
  
});

router.get('/view-posts', (request, response, next) => {

    const statement = `SELECT * FROM ${config.tableName}`;

    db.serialize(() => {
        db.all(statement, (error, rows) => {
            if (error) {
                logger.error('Problem reading data');
            } else {
                response.render('view-posts', {posts: rows });
            }
        });
        // db.close();
    });

    
});

router.get('/:id', (request, response, next) => {

    const id = request.params.id;
    const statement = `SELECT * FROM ${config.tableName} WHERE id = ${id}`;

    db.serialize(() => {

        db.each(statement, (error, row) => {

            if (error) {
                logger.error('Problem reading row');
            } else {
                response.render('view-posts', {posts: [row] });
            }

        });


    });
});

module.exports = router;