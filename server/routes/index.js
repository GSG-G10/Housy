const router = require('express').Router();
const estate = require('./estate');
const users = require('./users');
const admins = require('./admin');
const { logout } = require('../controllers');

router.get('/logout', logout);
router.use('/admin', admins);
router.use('/estate', estate);
router.use('/user', users);

module.exports = router;
