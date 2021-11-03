const router = require('express').Router();
const { isAuth } = require('../middleware');
const { editEstate, deleteEstate } = require('../controllers');

router.put('/:estateId', editEstate);
router.delete('/:estateId', isAuth, deleteEstate);
module.exports = router;
