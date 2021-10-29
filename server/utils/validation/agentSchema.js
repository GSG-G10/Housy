const joi = require('joi');

module.exports = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(5).required(),
  phone: joi.string().length(10).required(),
  confirmedPassword: joi.ref('password'),
});
