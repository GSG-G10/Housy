const router = require('express').Router();
const { logout } = require('../controllers');
const estate = require('./estate');
const users = require('./users');

router.use('/estate', estate);
router.use('/users', users);
router.get('/logout', logout);

module.exports = router;
