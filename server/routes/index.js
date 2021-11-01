const router = require('express').Router();
const auth = require('./auth');
const estate = require('./estate');
const users = require('./users');
const admins = require('./admin');

router.use('/users', users);
router.use('/admin', admins);
router.use('/estate', estate);
router.use('/', auth);

module.exports = router;
