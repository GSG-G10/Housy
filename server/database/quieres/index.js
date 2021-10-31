const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const checkEmailQuery = require('./checkEmailQuery');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstateQuery = require('./deleteEstateQuery');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  checkEmailQuery,
  editEstateQuery,
  deleteEstateQuery,
};
