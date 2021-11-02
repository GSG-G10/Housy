const router = require('express').Router();
const { userEstateshandler, getAllUsers } = require('../controllers');
const estate = require('./estate');
const signup = require('../controllers/users/signup');

router.use('/estate', estate);
router.post('/signup', signup);
router.get('/:userId/estates', userEstateshandler);
router.get('/', getAllUsers);

module.exports = router;
