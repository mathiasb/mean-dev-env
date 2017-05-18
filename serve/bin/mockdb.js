var jsf = require('json-schema-faker');
import {
  UsersMockSchema
} from '../models/user';
import fs from 'fs';
import chalk from 'chalk';

var userList = jsf(UsersMockSchema).users;

var mockDb = {
  users: userList
};

var dbFile = __dirname + '/../../tmp/db.json'

fs.writeFile(dbFile, JSON.stringify(mockDb), (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green('Mock user data generated at ' + dbFile));
  }
});
