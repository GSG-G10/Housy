const router = require('express').Router();
const auth = require('./auth');
const estate = require('./estate');
const users = require('./users');

router.use('/users', users);
router.use('/estate', estate);
router.use('/users', users);
router.use('/', auth);

module.exports = router;
