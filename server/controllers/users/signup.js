const { hash } = require('bcrypt');
const agentSchema = require('../../utils/validation/agentSchema');
const signUpQuery = require('../../database/quieres/account/signUp');
const { signToken } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const {
      error, value: {
        password, email, username, phone,
      },
    } = agentSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const hasedPasword = await hash(password, 10);
    const { rows } = await signUpQuery(username, email, phone, hasedPasword);
    const token = await signToken(email, username, phone, rows[0].id);
    return res.status(201).cookie('token', token).json({ message: 'user created' });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ message: 'The user is already exists' });
    }
    return next(err);
  }
};
