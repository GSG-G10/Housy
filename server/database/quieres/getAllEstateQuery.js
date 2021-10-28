const connection = require('../connection');

const getAllUsersQuery = () => connection.query('SELECT  * FROM estates;');

module.exports = getAllUsersQuery;
