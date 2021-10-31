const router = require('express').Router();
const {
  userEstateshandler, getAllUsers, logout, putAgent,
} = require('../controllers');
const estate = require('./estate');
const signup = require('../controllers/users/signup');

router.use('/estate', estate);
router.post('/signup', signup);
router.get('/:userId/estates', userEstateshandler);
router.put('/:userId', putAgent);
router.get('/', getAllUsers);

module.exports = router;
