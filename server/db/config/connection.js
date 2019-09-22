const { Pool } = require('pg');
require('dotenv').config();

let dburl;

if(process.env.NODE_ENV === 'development') {
  dburl= process.env.DEV_DB_URL
} else if (process.env.NODE_ENV === 'test'){
  dburl= process.env.TEST_DB_URL
}


const options = {
  connectionString: dburl,
  ssl: true,
}

if (!dburl) throw new Error('DB_URL Not founw');
module.exports = new Pool(options);