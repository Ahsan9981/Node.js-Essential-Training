var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ejs', function(req, res, next) {

  res.render('ejs-example', { 
    title: '<h1>Example EJS Template</h1>',
    showTitle: true,
    data: ['apple', 'oranges', 'peaches', 'mangos', 'grapes']
  });

});

module.exports = router;
