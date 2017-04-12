var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique:true},
  password: {type: String, required: true},
  endpoints: [{type: Schema.Types.ObjectId, ref: 'Endpoint'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
