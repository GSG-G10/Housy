const express = require('express');
const { notFoundError, serverError } = require('../controllers/errors');
const { getAllUsers, logout } = require('../controllers');

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/logout', logout);
router.use(notFoundError);
router.use(serverError);

module.exports = router;
