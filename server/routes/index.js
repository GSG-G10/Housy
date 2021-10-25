const express = require('express');
const { notFoundError, serverError } = require('../controllers/errors');

const router = express.Router();

router.use(notFoundError);
router.use(serverError);
module.exports = router;
