const { verifyToken } = require('../utils');

const isAuth = async (req, res, next) => {
  try {
    const {
      cookies: { token },
    } = req;
    if (!token) {
      return res.status(401).json({
        message: 'You are not authorized ',
      });
    }
    const decoded = await verifyToken(token);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'You are not authorized ',
    });
  }
};
module.exports = isAuth;
