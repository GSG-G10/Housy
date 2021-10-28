const router = require('express').Router();
const { isAuth, isAdmin } = require('../middleware');
const { deleteEstate } = require('../controllers');

router.delete('/:estateId', isAuth, deleteEstate);
module.exports = router;
