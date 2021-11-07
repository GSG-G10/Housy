const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const putAgent = require('./putAgent');
const deleteEstate = require('./deleteEstateQuery');
const checkAdminQuery = require('./checkAdmin');
const checkEmailQuery = require('./checkEmailQuery');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstateQuery = require('./deleteEstateQuery');
const signUpAdminQuery = require('./signUpAdminQuery');
const agentQuery = require('./agentQuery');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  putAgent,
  deleteEstate,
  checkAdminQuery,
  checkEmailQuery,
  editEstateQuery,
  deleteEstateQuery,
  signUpAdminQuery,
  agentQuery,
};
