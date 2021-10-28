const router = require('express').Router();
const { userEstateshandler } = require('../controllers');
const { getAllUsers, logout } = require('../controllers');
const { editEstate } = require('../controllers/estates');

router.get('/users/:userId/estates', userEstateshandler);
router.put('/estate/:estateId', editEstate);

router.get('/users', getAllUsers);
router.get('/logout', logout);

module.exports = router;
