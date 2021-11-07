const connection = require('../config/connection');

module.exports = (userId) => connection.query('SELECT estates.id, estates.title ,estates.description , estates.type,estates.category FROM estates WHERE estates.id = ($1) ', [userId]);
