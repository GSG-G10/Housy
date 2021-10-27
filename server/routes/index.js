const router = require('express').Router();
const { notFoundError, serverError } = require('../controllers/errors');
const { userEstateshandler } = require('../controllers');
const { getAllUsers, logout } = require('../controllers');

router.get('/users/:userId/estates', userEstateshandler);
router.get('/users', getAllUsers);
router.get('/logout', logout);
router.use(notFoundError);
router.use(serverError);

module.exports = router;
