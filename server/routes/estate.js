const router = require('express').Router();
const { isAuth, isAdmin } = require('../middleware');
const { editEstate, deleteEstate } = require('../controllers');

router.put('/:estateId', editEstate);
router.delete('/:estateId', isAuth, isAdmin, deleteEstate);
router.delete('/:estateId', deleteEstate);
module.exports = router;
