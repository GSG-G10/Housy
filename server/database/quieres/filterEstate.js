const connection = require('../config/connection');

module.exports = () => connection.query();
