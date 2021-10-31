const router = require('express').Router();
const { logout, login, adminLogin } = require('../controllers');

router.get('/logout', logout);
router.post('/login', login);
router.post('/adminLogin', adminLogin);

module.exports = router;
