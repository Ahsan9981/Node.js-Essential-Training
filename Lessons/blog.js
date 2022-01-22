const fs = require('fs');
const readline = require('readline');
const http = require('http');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const file = 'posts.txt';
const postTitle = (process.argv[2] || 'New Blog Post.');
const postAuthor =  (process.argv[3] || 'Unknown');

rl.question('Enter your blog post: ', (postContent) => {

    const blogEntry = `
    ${'-'.repeat(postTitle.length)}
    ${postTitle}
    ${'-'.repeat(postTitle.length)}
    By ${postAuthor} on ${new Date()}

    ${postContent}
    `;

    fs.appendFile(file, blogEntry, (error) => {

        if (error) {
            console.log('There was a problem saving your blog post');
            throw error;
        }
        console.log('Blog post was written successfully');
    });
    rl.close();
});

