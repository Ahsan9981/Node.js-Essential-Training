var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const success = req.query.submitted;

  res.render('index', { title: 'Express Blog', success});
});

module.exports = router;
