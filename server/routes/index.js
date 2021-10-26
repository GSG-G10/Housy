const router = require('express').Router();
const signup = require('../controllers/users/signup');
// const createToken = require('../controllers/middleware/auth/createToken');
const { notFoundError, serverError } = require('../controllers/errors');

router.post('/signup', signup);

router.use(notFoundError);
router.use(serverError);
module.exports = router;
