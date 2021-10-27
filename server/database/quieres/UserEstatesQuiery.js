const connection = require('../connection');

connection.query('SELECT * FROM estates WHERE agent_id = $1', [1]);

module.exports = (userId) => connection.query('SELECT * FROM estates WHERE agent_id = $1', [userId]);

//
