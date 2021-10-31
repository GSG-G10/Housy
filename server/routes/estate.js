const router = require('express').Router();

// router.delete('/:estateId', isAuth, isAdmin, deleteEstate);
// const { isAuth, isAdmin } = require('../middleware');
const { editEstate, deleteEstate } = require('../controllers');

router.put('/:estateId', editEstate);

router.delete('/:estateId', deleteEstate);
module.exports = router;
