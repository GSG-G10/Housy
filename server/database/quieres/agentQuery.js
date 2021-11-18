const connection = require('../config/connection');

module.exports = (userId) => connection.query('SELECT agents.id, agents.name,agents.email,agents.phone,agents.avater FROM agents WHERE agents.id = ($1) ', [userId]);
