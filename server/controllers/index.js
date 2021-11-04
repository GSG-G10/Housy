const { userEstateshandler, login } = require('./users');
const getAllUsers = require('./users/getAllUsers');
const { editEstate, deleteEstate, filterEstate } = require('./estates');
const logout = require('./logout');

module.exports = {
  getAllUsers, userEstateshandler, logout, login, deleteEstate, editEstate, filterEstate,
};
