const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const checkAdminQuery = require('./checkAdmin');
const checkEmailQuery = require('./checkEmailQuery');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstateQuery = require('./deleteEstateQuery');
const filterEstates = require('./filterEstates');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  checkAdminQuery,
  checkEmailQuery,
  editEstateQuery,
  deleteEstateQuery,
  filterEstates,
};
