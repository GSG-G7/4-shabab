const { getServices } = require('../../db/queries/getServices');

exports.routeServices = async (req, res) => {
  try {
    const services = await getServices();

    res.send({ data: services.rows });
    // res.redirect('/')
  } catch (err) {
    console.log(err);
  }
};
