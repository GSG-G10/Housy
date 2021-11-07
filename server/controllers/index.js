const {
  userEstateshandler, putAgent, getAllUsers, login,
} = require('./users');
const { deleteEstate, editEstate } = require('./estates');
const logout = require('./logout');
const { adminLogin } = require('./admins');

module.exports = {
  getAllUsers, userEstateshandler, logout, login, deleteEstate, editEstate, putAgent,adminLogin

};
