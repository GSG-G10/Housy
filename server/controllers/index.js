const { userEstateshandler } = require('./users');
const getAllUsers = require('./users/getAllUsers');
const {deleteEstate} = require('./estates');
const logout = require('./logout');

module.exports = { getAllUsers, userEstateshandler, logout,deleteEstate };
