const connection = require('../connection')

module.exports = (userId) =>connection.query('SELECT * FROM estates WHERE userId = $1',[userId])
