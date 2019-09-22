const { Pool } = require('pg');
require('dotenv').config();

let dburl;
if (!dburl) {throw new Error('DB_URL Not founw');

} else {
  if(process.env.NODE_ENV === 'development') {
    dburl= process.env.DEV_DB_URL
  } else if (process.env.NODE_ENV === 'test'){
    dburl= process.env.TEST_DB_URL
  } else if (process.env.NODE_ENV === 'production') {
    dbUrl = process.env.DB_URL;
  }
  
  
  const options = {
    connectionString: dburl,
    ssl: true,
  }
}  

module.exports = new Pool(options);