const joi = require('joi');

const editEstateValidation = joi.object({
  estateId: joi.number().integer().required(),
  title: joi.string().required(),
  price: joi.number().integer().required(),
  description: joi.string().required(),
  type: joi.string().required(),
  category: joi.string().required(),
  street: joi.string().required(),
  city: joi.string().required(),
  region: joi.string().required(),
  bathrooms: joi.number().integer().required(),
  bedrooms: joi.number().integer().required(),
  rooms: joi.number().integer().required(),
  space: joi.number().integer().required(),
  available: joi.boolean().required(),
});

module.exports = { editEstateValidation };
