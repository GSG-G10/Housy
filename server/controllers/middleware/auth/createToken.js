const {sign} = require('jsonwebtoken');
module.exports = (req, res, next) => {
    //user => object (name, email, phone)
       const payload = req.body.user;
       const accessToken = sign(payload,process.env.ACCESS_TOKEN_SECRET);
       res.cookie('token', accessToken);
}