const connection = require('../connection');

module.exports = () => connection.query('SELECT * FROM estates INNER JOIN images on estates.id=images.estate_id');