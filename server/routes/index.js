const router = require('express').Router();
const { userEstateshandler } = require('../controllers');
const { getAllUsers, logout, login } = require('../controllers');

router.get('/users/:userId/estates', userEstateshandler);
router.post('/login', login);
router.get('/users', getAllUsers);
router.get('/logout', logout);

module.exports = router;
