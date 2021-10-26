const express = require('express');
const { notFoundError, serverError } = require('../controllers/errors');
const { getAllUsers } = require('../controllers');

const router = express.Router();

router.get('/users', getAllUsers);
router.use(notFoundError);
router.use(serverError);

module.exports = router;
