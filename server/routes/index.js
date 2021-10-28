const router = require('express').Router();
<<<<<<< HEAD
const auth = require('./auth');
const users = require('./users');

router.use('/', auth);
router.use('/users', users);
=======
const { userEstateshandler } = require('../controllers');
const { getAllUsers, logout } = require('../controllers');

router.get('/users/:userId/estates', userEstateshandler);
router.get('/users', getAllUsers);
router.get('/logout', logout);
>>>>>>> 98fdfa83c17929ef396648e82c40d0b679812f0e

module.exports = router;
