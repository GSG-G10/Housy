const connection = require('../config/connection');

const getAllUsersQuery = () => connection.query('SELECT  * FROM estates;');

module.exports = getAllUsersQuery;
