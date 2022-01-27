const sqlite3 = require('sqlite3').verbose();
const inquirer = require('inquirer');
const logger = require('./logger');
const config = require('./config');


const db = new sqlite3.Database(config.databaseName);

inquirer.prompt([
    {
        name: 'title',
        message: 'Post Title:'
    },
    {
        name: 'author',
        message: 'Author'
    },
    {
        name: 'date',
        message: 'Date:',
        default: new Date().toUTCString()
    },
    {
        name: 'post',
        message: "Post Content:"
    }
])
.then(answers => {

    const { title, author, date, post } = answers;

    db.serialize(()=> {

        const statement =  `INSERT INTO ${config.tableName} (title, author, date, post)
        VALUES ("${title}", "${author}", "${date}", "${post}")`;

        db.run(statement, (error) => {

            if (error) {
                logger.error(`An error occured: `, error);
            } else {
                logger.success(`Post added successfully.`);
            }
        });

        db.close();
    });
});