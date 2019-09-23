const express = require('express');

const router = express.Router();

const { routeServices } = require('./routes/getServices');

router.get('/services', routeServices);

module.exports = router;
