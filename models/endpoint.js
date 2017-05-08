var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  baseUrl: {type: String, required: true},
  client_id: {type: String, required: false},
  client_secret: {type: String, required: false},
  authcode: {type: String, required: false},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Endpoint', schema);
