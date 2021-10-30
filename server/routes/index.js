const router = require('express').Router();

const auth = require('./auth');
const users = require('./users');
const estate = require('./estate');

router.use('/', estate);
router.use('/', auth);
router.use('/users', users);

module.exports = router;
