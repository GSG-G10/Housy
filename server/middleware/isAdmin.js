const { checkAdminQuery } = require('../database/quieres');

const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.cookies;
    if (!email) {
      throw new Error({ message: 'You are not authorized' });
    }
    const rows = await checkAdminQuery(email);
    if (!rows.length) {
      throw new Error({ message: 'You are not authorized' });
    } else {
      return res.json({ message: 'You are Admin' });
    }
  } catch (err) {
    return next(err);
  }
};
module.exports = isAdmin;
