const router = require('express').Router();
const { signupAdmin, adminLogin } = require('../controllers/admins');

router.post('/signup', signupAdmin);
router.post('/login', adminLogin);

module.exports = router;
