const router = require('express').Router();
const { isAuth } = require('../middleware');
const { editEstate, deleteEstate, getEstate } = require('../controllers');

router.put('/:estateId', editEstate);
router.get('/:estateId', getEstate);

router.delete('/:estateId', isAuth, deleteEstate);
module.exports = router;
