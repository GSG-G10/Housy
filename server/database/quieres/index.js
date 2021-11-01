const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const checkAdminQuery = require('./checkAdmin');
const checkEmailQuery = require('./checkEmailQuery');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstateQuery = require('./deleteEstateQuery');
const signUpAdminQuery = require('./signUpAdminQuery');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  checkAdminQuery,
  checkEmailQuery,
  editEstateQuery,
  deleteEstateQuery,
  signUpAdminQuery,
};
