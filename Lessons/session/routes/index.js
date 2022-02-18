const express = require('express');
const router = express.Router();

router.get('/', (request, response, next ) => {
    
    if (!request.session.viewCount) {
        request.session.viewCount = 1;
    } else {
        request.session.viewCount++;
    }
    response.render('index', {viewCount: request.session.viewCount});
});

module.exports = router;