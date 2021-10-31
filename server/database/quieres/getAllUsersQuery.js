const connection = require('../config/connection');

const getAllUsersQuery = () => connection.query('SELECT  * FROM agents');

module.exports = getAllUsersQuery;
