const joi = require('joi');

module.exports = joi.object({
    name:joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).required(),
    //like +911234567890
    phone: joi.string().pattern(/^\+[0-9]{2}[0-9]{9}$/).required(),
})
