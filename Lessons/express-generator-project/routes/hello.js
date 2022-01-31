const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/', (req, res, next) => {
    const name = req.query.name;
    res.render('hello', { name });
});

router.get('/time', (req, res, next) => {
    res.json({
        time: new Date().toISOString()
    })
});

router.post('/hash', (req, res, next) => {

    const plainText = req.body.plainText;
    const hash = crypto.createHash('md5').update(plainText).digest('hex');

    res.json({
        plainText,
        hash
    });
});

router.get('/:person/:greetings', (req, res, next) => {
    const name = req.params.person;
    const greetings = req.params.greetings;
    res.render('hello', { name, greetings });
});

module.exports = router;