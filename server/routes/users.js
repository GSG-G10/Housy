const router = require('express').Router();
const { userEstateshandler } = require('../controllers');
const { getAllUsers, logout } = require('../controllers');
const estate = require('./estate');

router.use('/estate', estate);

router.get('/users/:userId/estates', userEstateshandler);
router.get('/users', getAllUsers);


module.exports = router;
