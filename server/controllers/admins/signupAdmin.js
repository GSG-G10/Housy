const { hash } = require('bcrypt');
const adminSchema = require('../../utils/validation/adminSchema');
const { signUpAdminQuery } = require('../../database/quieres');
const { signToken } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const {
      error, value: {
        password, email, username,
      },
    } = adminSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const hasedPasword = await hash(password, 10);
    await signUpAdminQuery(username, hasedPasword, email);
    const token = await signToken(email, username);
    return res.status(201).cookie('token', token).json({ message: 'user created' });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ message: 'The user is already exists' });
    }
    return next(err);
  }
};
