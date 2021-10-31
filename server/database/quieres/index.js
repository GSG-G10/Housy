const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const editEstateQuery = require('./editEstatesQuery');
const deleteEstate = require('./deleteEstate');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  editEstateQuery,
  deleteEstate,
};
