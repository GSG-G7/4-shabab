const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  return connection.query(sql).then(console.log('Done')).catch(((err) => console.log(err)));
};

module.exports = dbBuild;
