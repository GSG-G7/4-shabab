const {join} = require('path');
const{ readFileSync } = require('fs')

const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'build.sql')).toString();

connection.
  .query(sql)
  .then(console.log('Build Successfully')
  .catch(err => console.log(err));

  module.exports = connection;
  