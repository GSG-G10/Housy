const router = require('express').Router();

const { isAuth, isAdmin } = require('../middleware');
const { editEstate, deleteEstate } = require('../controllers');

router.put('/:estateId', isAuth, editEstate);

router.delete('/:estateId', isAuth, deleteEstate);
module.exports = router;
