const router = require('express').Router();
const { userEstateshandler, getAllUsers } = require('../controllers');

router.get('/:userId/estates', userEstateshandler);
router.get('/', getAllUsers);

module.exports = router;
