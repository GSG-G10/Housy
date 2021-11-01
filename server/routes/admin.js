const router = require('express').Router();
const { signupAdmin } = require('../controllers/admins');

router.post('/signup', signupAdmin);

module.exports = router;
