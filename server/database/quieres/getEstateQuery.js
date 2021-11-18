const connection = require('../config/connection');

module.exports = (estateId) => connection.query('SELECT * FROM estates where estates.id = $1;', [estateId]);
