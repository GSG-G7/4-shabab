const connection = require('./../config/connection');

const getServices = () => {
  connection.query('select name, imgUrl(if exist) from services')
    .then(console.log('Done'))
    .catch((err) => console.log(err));
};

module.exports = getServices;
