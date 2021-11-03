const joi = require('joi');

module.exports = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().min(9).required(),
  avater: joi.string(),
  userId: joi.number().min(1).required(),
});
