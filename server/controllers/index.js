const express = require('express');
const { postJob } = require('./routes/postJob');
const { getLogout } = require('./routes/getLogout');

const router = express.Router();
router.post('/hire', postJob);
router.get('/logout', getLogout);

module.exports = router;
