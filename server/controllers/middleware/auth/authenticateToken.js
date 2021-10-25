const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    verify(req.cookies.token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = payload;
        next();
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};