module.exports = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 4,
      maxItems: 9,
      items: {
        type: 'object',
        properties: {
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
    },
    messages: {
      type: 'array',
      minItems: 9,
      maxItems: 19,
      items: {
        type: 'object',
        properties: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              unique: true,
              minimum: 10001
            },
            content:{
              type: 'string'
            }
          },
          required: ['id', 'content']
        }
      }
    }
  }
}
