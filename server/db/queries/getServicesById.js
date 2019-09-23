const connection = require('./../config/connection');


const getServicesById = (id) => {
  connection.query(
    'select users.username, handyman.job_title, handyman.description from users inner join handyman on users.id = $1', [id])
    .catch((err) => console.log(err));
}


module.exports = getServicesById;
