const router = require('express').Router();
const { logout } = require('../controllers');
const estate = require('./estate');
const users = require('./users');

router.use('/users', users);
router.use('/estate', estate);
router.get('/logout', logout);

module.exports = router;
