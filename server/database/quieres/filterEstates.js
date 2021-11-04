const connection = require('../config/connection');

module.exports = ({
  type = 'sale',
  category = 'whole house',
  location = 'Gaza',
  minPrice = 190450,
  maxPrice = 190483.22,
  numberOfRooms = 2,
  numberOfBathrooms = 2,
  numberOfBedrooms = 3,
}) => connection.query(`
    SELECT * FROM estates
    WHERE type = $1
    AND category = $2
    AND city = $3
    AND price BETWEEN $4 AND $5
    AND rooms = $6
    AND bathrooms = $7
    AND bedrooms = $8
    `, [type, category, location, minPrice, maxPrice, numberOfRooms, numberOfBathrooms, numberOfBedrooms]);
