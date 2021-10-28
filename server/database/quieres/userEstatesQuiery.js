const connection = require('../config/connection');

module.exports = (userId) => connection.query('SELECT * FROM estates WHERE agent_id = $1', [userId]);
