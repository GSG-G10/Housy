const router = require('express').Router();
const {
  editEstate, deleteEstate, filterEstate, getEstate,
} = require('../controllers');
const { isAuth } = require('../middleware');

router.get('/search', filterEstate);
router.put('/:estateId', editEstate);
router.get('/:estateId', getEstate);

router.delete('/:estateId', isAuth, deleteEstate);
module.exports = router;
