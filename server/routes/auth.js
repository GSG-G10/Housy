const router = require('express').Router();
const signup = require('../controllers/users/signup');
const { logout } = require('../controllers');

router.post('/signup', signup);
router.get('/logout', logout);
module.exports = router;
