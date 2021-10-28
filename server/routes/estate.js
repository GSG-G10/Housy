const router =  require('express').Router();
const {isAuth,isAdmin} = require('../middleware');

const {deleteEstate} = require('../controllers');

router.delete(isAuth,isAdmin,'/:estateId', deleteEstate);
module.exports = router;