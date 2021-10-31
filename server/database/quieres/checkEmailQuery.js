const connection = require('../config/connection');

const checkEmailQuery = (email) => connection.query('SELECT * FROM agents WHERE email= ($1)', [email]);

module.exports = checkEmailQuery;
