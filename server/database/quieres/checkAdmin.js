const connection = require('../config/connection');

const checkAdminQuery = (email) => connection.query('SELECT * FROM admins WHERE email= ($1)', [email]);

module.exports = checkAdminQuery;
