const signUpSchema = require("../../utils/validation/signUpSchema")
const { hash } = require('bcrypt');
const signUpQuery = require('../../database/quieres/account/signUp');
module.exports = async (req,res,next)=>{
     try{
           const {username,password,email,phone} = await signUpSchema.validate(req.body);
           const hasedPswrd = await hash(password, 8);
           const user = await signUpQuery(username,email,phone,hasedPswrd);
           
     }catch(err){

     }
}