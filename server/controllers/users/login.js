/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const { loginSchema } = require('../../utils/validation/loginSchema');
const { checkEmailQuery } = require('../../database/quieres');
const { signToken } = require('../../utils');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validateAsync(req.body);

    const { rows } = await checkEmailQuery(email);

    if (!rows.length) {
      throw new Error({ message: 'Invalid email or password' });
    }
    const compared = await bcrypt.compare(password, rows[0].password);
    if (!compared) {
      throw new Error({ message: 'Invalid email or password' });
    }
    const token = await signToken(email, rows[0].id, rows[0].name, rows[0].phone, rows[0].avater);
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

module.exports = login;
