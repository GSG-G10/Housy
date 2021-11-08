const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const putAgent = require('./putAgent');
const deleteEstate = require('./deleteEstateQuery');
const checkAdminQuery = require('./checkAdmin');
const checkEmailQuery = require('./checkEmailQuery');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstateQuery = require('./deleteEstateQuery');
const filterEstates = require('./filterEstates');
const signUpAdminQuery = require('./signUpAdminQuery');
const agentQuery = require('./agentQuery');
const getImagesQuery = require('./getImagesQuery');
const getEstateQuery = require('./getEstateQuery');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  putAgent,
  deleteEstate,
  checkAdminQuery,
  checkEmailQuery,
  editEstateQuery,
  deleteEstateQuery,
  filterEstates,
  signUpAdminQuery,
  agentQuery,
  getImagesQuery,
  getEstateQuery,
};
