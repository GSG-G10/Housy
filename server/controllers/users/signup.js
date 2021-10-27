const { hash } = require('bcrypt');
const signupSchema = require('../../utils/validation/signUpSchema');
const signUpQuery = require('../../database/quieres/account/signUp');
const { signToken } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const {
      error, value: {
        password, email, username, phone,
      },
    } = signupSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const hasedPasword = await hash(password, 10);
    await signUpQuery(username, email, phone, hasedPasword);
    const token = await signToken(email, username, phone);
    return res.status(201).cookie('token', token).json({ message: 'user created' });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'username or phone already exists' });
    }
    return next(err);
  }
};
