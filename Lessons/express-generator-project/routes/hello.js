const express = require('express');
const router = express.Router();

router.get('/hello', (req, res, next) => {

    const name = req.query.name;

    res.render('hello', { name });
});

module.exports = router;