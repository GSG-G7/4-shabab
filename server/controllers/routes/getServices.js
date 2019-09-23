const { getServices } = require('../../db/queries/getServices');

exports.routeServices = async () => {
  try {
    const data = await getServices();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
