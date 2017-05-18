var express = require('express');
var web_api = require('../webapi/api-handler');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('_index', { title: 'My Dashboard' });
});

router.get('/users', function(req, res, next) {
  var userList = web_api.getUsers();
  res.send(userList);
//  res.render('_index', { users: userList });
});

module.exports = router;
