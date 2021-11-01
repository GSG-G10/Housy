const connection = require('../config/connection');

module.exports = (userName, password, email) => connection.query('INSERT INTO admins (username,password, email) VALUES ($1,$2,$3)', [userName, password, email]);
