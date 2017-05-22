var express = require('express');
var web_api = require('../webapi/api-handler');

var router = express.Router();

router.delete('/users/:userId', function(req, res, next) {
  var user = web_api.deleteUser(req.params.userId);
  console.log('In DELETE USER ' + req.params.userId);
  res.redirect('/users');
});

router.get('/users', function(req, res, next) {
  var userList = web_api.getUsers();
  console.log('In GET USERS');
  res.send(userList);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('In GET /');
  res.render('_index', { title: 'My Dashboard' });
});

module.exports = router;
