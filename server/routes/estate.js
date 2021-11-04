const router = require('express').Router();

// const { isAuth, isAdmin } = require('../middleware');
const { editEstate, deleteEstate, filterEstate } = require('../controllers');

router.get('/search', filterEstate);
router.put('/:estateId', editEstate);
router.delete('/:estateId', deleteEstate);
module.exports = router;
