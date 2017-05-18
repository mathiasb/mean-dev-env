var jsf = require('json-schema-faker');
import {
  UserMockSchema
} from '../models/user';
import fs from 'fs';
import chalk from 'chalk';

var userData = UserMockSchema.properties.user;
var dbSchema = {
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

var newMockDb = jsf(dbSchema);

var dbFile = __dirname + '/../../tmp/db.json'

fs.writeFile(dbFile, JSON.stringify(newMockDb), (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.blue('Mock user data generated at ' + dbFile));
  }
});
