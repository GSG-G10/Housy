const express = require('express');
const { notFoundError, serverError } = require('../controllers/errors');
const { userEstateshandler } = require('../controllers');

const router = express.Router();
const { getAllUsers } = require('../controllers');

router.get('/users/:userId/estates', userEstateshandler);
router.get('/users', getAllUsers);
router.use(notFoundError);
router.use(serverError);

module.exports = router;
