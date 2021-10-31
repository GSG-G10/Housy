const { checkAdminQuery } = require('../database/quieres');
const { verifyToken } = require('../utils');

const isAdmin = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: 'You are not authorized' });
    }
    const decoded = await verifyToken(token);
    req.email = decoded.email;

    const rows = await checkAdminQuery(req.email);
    if (!rows.length) {
      return res.status(400).json({ message: 'You are not authorized' });
    }
    return next();
  } catch (err) {
    return next(err);
  }
};
module.exports = isAdmin;
