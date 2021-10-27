const connection = require('../connection');

const getAllUsersQuery = () => connection.query('SELECT  * FROM agents');

module.exports = getAllUsersQuery;
