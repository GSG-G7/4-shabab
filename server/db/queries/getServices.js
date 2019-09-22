const connection = require('./../config/connection');

const getServices = () => {
  connection.query(
    'select name from services',
    // 'select name, imgUrl(if exist) from services',
  );
};

module.exports = getServices;
