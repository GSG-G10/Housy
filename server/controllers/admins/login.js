/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const { loginSchema } = require('../../utils/validation/loginSchema');
const { checkAdminQuery } = require('../../database/quieres');
const { signToken } = require('../../utils');

const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validateAsync(req.body);

    const { rows } = await checkAdminQuery(email);

    if (!rows.length) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const compared = await bcrypt.compare(password, rows[0].password);
    if (!compared) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = await signToken(email, rows[0].id);
    return res.cookie('token', token).json({ message: 'You are Logged Successfully' });
  } catch (err) {
    if (err.details) {
      res.status(400).json({
        message: err.details[0].message,
      });
    } else {
      return next(err);
    }
  }
};

module.exports = adminLogin;
