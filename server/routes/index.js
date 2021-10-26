const express = require('express');
const { notFoundError, serverError } = require('../controllers/errors');
const { GetallEstate } = require('../controllers/estates');

const router = express.Router();

router.use(notFoundError);
router.use(serverError);
router.get('/estate', GetallEstate);

module.exports = router;