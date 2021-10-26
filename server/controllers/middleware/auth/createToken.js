const {sign} = require('jsonwebtoken');
module.exports = (req, res, next) => {
       const payload = req.user;
       try{
        const accessToken = sign(payload,process.env.ACCESS_TOKEN_SECRET);
       res.status(201).cookie('token', accessToken, {
                 httpOnly: true
       }).json({
                     message: 'User created successfully'
       });
       }catch(err){
        return next(err)
       }
       
}