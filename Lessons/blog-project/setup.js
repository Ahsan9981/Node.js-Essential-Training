const sqlite3 = require('sqlite3').verbose();
const logger = require('./logger');
const config = require('./config');

const db = new sqlite3.Database(config.databaseName);

db.serialize(() => {

    const statement = `CREATE TABLE ${config.tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT, date TEXT, author TEXT, post TEXT)`;

    db.run(statement, (error) => {
        
        if (error) {
            logger.error(error);
        } else {
            logger.success(result);
        }
    });
});