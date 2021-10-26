const joi = require('joi');

module.exports = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(5).required(),
  // like +911234567890
  phone: joi.string().length(10).required(),
});
