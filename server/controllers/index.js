const { userEstateshandler } = require('./users');
const getAllUsers = require('./users/getAllUsers');
const logout = require('./logout');
const { getAllEstate, editEstate } = require('./estates');

module.exports = {
  getAllUsers, userEstateshandler, logout, getAllEstate, editEstate,
};
