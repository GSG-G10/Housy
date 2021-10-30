const router = require('express').Router();

const { editEstate } = require('../controllers/estates/index');

router.put('/estate/:estateId', editEstate);

module.exports = router;
