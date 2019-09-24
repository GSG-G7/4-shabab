const express = require('express');

const logout = require('../controllers/routes/getLogout');

const router = express.Router();

const { routeServices } = require('./routes/getServices');
const { getUserJobs } = require('./routes');
const { unlockCookie } = require('./middleware/unlockCookie');

router.get('/services', routeServices);
router.use(unlockCookie);
router.get('/jobs', getUserJobs);
router.get('/logout', logout);

module.exports = router;
