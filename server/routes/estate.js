const router = require('express').Router();
const { isAuth, isAdmin } = require('../middleware');
const { editEstate, deleteEstate } = require('../controllers');

router.put('/:estateId', editEstate);
router.delete('/:estateId', isAuth, isAdmin, deleteEstate);
module.exports = router;
