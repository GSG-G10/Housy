const router = require('express').Router();
const { logout, login } = require('../controllers');

router.get('/logout', logout);
router.post('/login', login);

module.exports = router;
