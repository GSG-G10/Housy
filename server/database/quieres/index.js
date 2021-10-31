const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const checkAdminQuery = require('./checkAdmin');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstateQuery = require('./deleteEstateQuery');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  checkAdminQuery,
  editEstateQuery,
  deleteEstateQuery,
};
