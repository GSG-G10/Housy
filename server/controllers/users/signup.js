const { hash } = require('bcrypt');
const signupSchema = require('../../utils/validation/signUpSchema');
const signUpQuery = require('../../database/quieres/account/signUp');

module.exports = async (req, res, next) => {
  try {
    const {
      error, value: {
        password, email, username, phone,
      },
    } = signupSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const hasedPasword = await hash(password, 10);
    console.log(hasedPasword);
    const { rows } = await signUpQuery(username, email, phone, hasedPasword);
    if (rows[0]) {
      return res.status(400).json({ error: 'username or phone already exists' });
    }
    req.user = { username, email, phone };
    next();
  } catch (err) {
    console.log(err);
    // next(err);
  }
};
