const {sign} = require('jsonwebtoken');
module.exports = (req, res, next) => {
       const payload = req.user;
       const accessToken = sign(payload,process.env.ACCESS_TOKEN_SECRET);
       res.cookie('token', accessToken);
}