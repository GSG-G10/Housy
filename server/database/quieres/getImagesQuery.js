const connection = require('../config/connection');

module.exports = (estateId) => connection.query('SELECT * FROM  images where estate_id = $1;', [estateId]);
