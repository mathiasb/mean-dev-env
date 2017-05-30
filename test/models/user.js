var UserMockSchema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      properties: {
        id: {
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
      required: ['id', 'firstName', 'lastName', 'email', 'password']
    }
  }
};

module.exports = { UserMockSchema }
