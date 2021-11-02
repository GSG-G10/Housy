const router = require('express').Router();
const estate = require('./estate');
const users = require('./users');
const { logout, login } = require('../controllers');

router.get('/logout', logout);
router.post('/login', login);
router.use('/estate', estate);
router.use('/user', users);

module.exports = router;
