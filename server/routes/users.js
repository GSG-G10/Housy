const router = require('express').Router();
const {
  userEstateshandler, getAllUsers, putAgent,login
} = require('../controllers');
const estate = require('./estate');
const signup = require('../controllers/users/signup');
const { isAuth } = require('../middleware');

router.use('/estate', estate);
router.post('/signup', signup);
router.post('/login', login);
router.get('/:userId/estates', userEstateshandler);
router.put('/:userId', isAuth, putAgent);
router.get('/', getAllUsers);

module.exports = router;
