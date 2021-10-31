const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstateQuery = require('./deleteEstateQuery');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  editEstateQuery,
  deleteEstateQuery,
};
