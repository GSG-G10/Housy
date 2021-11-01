const router = require('express').Router();
const { signupAdmin } = require('../controllers/admins');

router.post('/signupadmin', signupAdmin);

module.exports = router;
