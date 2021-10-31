const userEstatesQuery = require('./userEstatesQuiery');
const getAllUsersQuery = require('./getAllUsersQuery');
const putAgent = require('./putAgent');
const deleteEstate = require('./deleteEstate');

module.exports = {
  getAllUsersQuery,
  userEstatesQuery,
  putAgent,
  deleteEstate,
};
