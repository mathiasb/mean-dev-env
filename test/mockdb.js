import { UserMockSchema } from './models/user';
import { MessageMockSchema } from './models/message';
import fs from 'fs';
import chalk from 'chalk';

const jsf = require('json-schema-faker');

const userData = UserMockSchema.properties.user;
const messageData = MessageMockSchema.properties.message;

const dbSchema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 4,
      maxItems: 9,
      items: userData
    },
    messages: {
      type: 'array',
      minItems: 9,
      maxItems: 19,
      items: messageData
    }
  }
};

const newMockDb = jsf(dbSchema);

const dbFile = __dirname + '/../tmp/db.json'

fs.writeFile(dbFile, JSON.stringify(newMockDb), 'utf-8', (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.blue('Mock user data generated at ' + dbFile));
  }
});
