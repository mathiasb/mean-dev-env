var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('_index', { title: 'Zing Dashboard' });
});

module.exports = router;
