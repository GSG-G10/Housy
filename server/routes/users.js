const router = require('express').Router();
const { userEstateshandler, getAllUsers } = require('../controllers');
const signup = require('../controllers/users/signup');

router.post('/signup', signup);
router.get('/:userId/estates', userEstateshandler);
router.get('/', getAllUsers);

module.exports = router;
