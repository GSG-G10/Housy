const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const deleteEstate = require('./deleteEstate');
module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  deleteEstate
};
