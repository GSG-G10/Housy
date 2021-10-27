const express = require('express');
const { notFoundError, serverError } = require('../controllers/errors');
const { userEstateshandler } = require('../controllers');

const router = express.Router();

router.get('/users/:userId/estates', userEstateshandler);

router.use(notFoundError);
router.use(serverError);
module.exports = router;
