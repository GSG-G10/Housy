const router = require('express').Router();
const estate = require('./estate');
const users = require('./users');
const { logout } = require('../controllers');
const admins = require('./admin');

router.get('/logout', logout);
router.use('/admin', admins);
router.use('/estate', estate);
router.use('/user', users);

module.exports = router;
