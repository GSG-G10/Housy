const { userEstateshandler, login } = require('./users');
const getAllUsers = require('./users/getAllUsers');
const { editEstate, deleteEstate } = require('./estates');
const logout = require('./logout');
const adminLogin = require('./admins');

module.exports = {
  getAllUsers, userEstateshandler, logout, login, deleteEstate, editEstate, adminLogin,

};
