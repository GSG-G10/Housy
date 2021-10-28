const connection = require('../connection');
module.exports = (id) => connection.query('DELETE FROM estates WHERE id = $1', [id]);
   