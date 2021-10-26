const { hash } = require('bcrypt');
const signupSchema = require("../../utils/validation/signUpSchema")
const signUpQuery = require("../../database/quieres/account/signUp")

module.exports = sync (req, res, next) => {

  try {
    const {username,email,password,phone} = await signupSchema.validate(req.body);
    const hasedPasword = await hash(password, 8);
   await signUpQuery(username,email,phone,hasedPasword);
   req.user = {username,email,phone};
   next();
  } catch (err) {next(err);}
  
};

