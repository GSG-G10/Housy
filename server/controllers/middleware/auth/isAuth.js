const { verify } = require('jsonwebtoken');

module.exports = async(req, res, next) => {
  if (req.cookies?.token) {
    try{
       const token =  verify(req.cookies.token, process.env.ACCESS_TOKEN_SECRET)
       req.user = token;
       next()
    }catch{
       res.status(403).json({ message: 'Invalid token' })
    }
    
  } else {
      res.status(401).json({ message: 'No token provided' });
  }
};