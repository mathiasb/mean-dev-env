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

var UserMockSchema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      properties: {
        userId: {
          type: 'integer',
          unique: true,
          minimum: 10001
        },
        firstName:{
          type: 'string',
          faker: 'name.firstName'
        },
        lastName:{
          type: 'string',
          faker: 'name.lastName'
        },
        email:{
          type: 'string',
          format: 'email',
          faker: 'internet.email'
        },
        password:{
          type: 'string'
        }
      },
      required: ['userId', 'firstName', 'lastName', 'email', 'password']
    }
  }
};

var userData = UserMockSchema.properties.user;
var UsersMockSchema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 4,
      maxItems: 9,
      items: userData
    }
  }
};

var User = mongoose.model('User', schema);
module.exports = { User, UserMockSchema, UsersMockSchema }
