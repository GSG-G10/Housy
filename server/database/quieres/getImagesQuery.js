const connection = require('../config/connection');

module.exports = (estateId) => connection.query('SELECT image FROM  images where estate_id = $1;', [estateId]);
