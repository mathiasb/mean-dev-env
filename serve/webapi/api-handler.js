var request = require('request');
var qs = require('querystring');
var User = require('../models/user');

function getUsers() {
  var userList = [
    {firstName: 'Jack', lastName: 'Jacksson', email: 'jack@usr.it', password: 'secret-password'},
    {firstName: 'Jill', lastName: 'Jacksson', email: 'jill@usr.it', password: 'secret-password'},
    {firstName: 'Joe', lastName: 'Jacksson', email: 'joe@usr.it', password: 'secret-password'},
    {firstName: 'Jenny', lastName: 'Jacksson', email: 'jenny@usr.it', password: 'secret-password'},
  ];
  return userList;
}

function authenticate(url, client_id, client_secret, authcode) {

}

function get(url) {
  return request(url, (error, response, body) => {
    if (error) {
      console.error(error);
    }
    return body.json();
  });
}

module.exports = { getUsers }
