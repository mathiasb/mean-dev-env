var MessageMockSchema = {
  type: 'object',
  properties: {
    message: {
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
};
module.exports = { MessageMockSchema }
