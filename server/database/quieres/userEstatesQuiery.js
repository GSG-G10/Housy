const connection = require('../config/connection');

module.exports = (userId) => connection.query('SELECT * FROM agents INNER JOIN estates  on agents.id = estates.agent_id INNER JOIN images ON estates.id = images.estate_id WHERE agents.id = ($1) ', [userId]);
