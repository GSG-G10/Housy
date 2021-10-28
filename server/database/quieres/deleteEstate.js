const connection = require('../config/connection');

module.exports = (id) => connection.query('DELETE FROM estates WHERE id = $1', [id]);
