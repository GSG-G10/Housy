const { userEstateshandler, login } = require('./users');
const getAllUsers = require('./users/getAllUsers');
const logout = require('./logout');

module.exports = {
  getAllUsers, userEstateshandler, logout, login,
};
