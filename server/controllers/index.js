const { userEstateshandler, putAgent, getAllUsers } = require('./users');
const { deleteEstate } = require('./estates');
const logout = require('./logout');

module.exports = {
  getAllUsers, userEstateshandler, logout, deleteEstate, putAgent,
};
