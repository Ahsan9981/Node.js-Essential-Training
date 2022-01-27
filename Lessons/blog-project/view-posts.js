const sqlite3 = require('sqlite3').verbose();
const logger = require('./logger');
const config = require('./config');

const db = new sqlite3.Database(config.databaseName);


db.serialize(() => {

    const statement = `SELECT * FROM ${config.tableName}`;

    db.each(statement, (error, row) => {
        
        if (error) {
            logger.error('Problem reading row data');
        } else {
            const { title, author, date, post } = row;
            console.log(title);
            console.log(author);
            console.log(date);
            console.log(post);
        }
    });

    db.close();
});

