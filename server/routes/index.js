const router = require('express').Router();
const {
  getAllUsers, logout, userEstateshandler, getAllEstate,
} = require('../controllers');
const { editEstate } = require('../controllers/estates');

router.get('/users/:userId/estates', userEstateshandler);
router.put('/estate/:estateId', editEstate);
router.get('/estates', getAllEstate);

router.get('/users', getAllUsers);
router.get('/logout', logout);

module.exports = router;
