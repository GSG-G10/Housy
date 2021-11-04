const {
  userEstateshandler, login, putAgent, getAllUsers,
} = require('./users');
const { editEstate, deleteEstate, filterEstate } = require('./estates');
const logout = require('./logout');
const { adminLogin } = require('./admins');

module.exports = {
  filterEstate,
  getAllUsers,
  userEstateshandler,
  logout,
  login,
  deleteEstate,
  editEstate,
  putAgent,
  adminLogin,

};
