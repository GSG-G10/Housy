const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().length(10).required(),
  avater: joi.string(),
});
