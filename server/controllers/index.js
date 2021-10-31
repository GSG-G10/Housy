const {
  userEstateshandler, putAgent, getAllUsers, login,
} = require('./users');
const { deleteEstate, editEstate } = require('./estates');
const logout = require('./logout');

module.exports = {
  getAllUsers, userEstateshandler, logout, login, deleteEstate, editEstate, putAgent,
};
