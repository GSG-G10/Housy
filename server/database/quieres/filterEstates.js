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
    OR category = $2
    OR city = $3
    OR price BETWEEN $4 AND $5
    OR rooms = $6
    OR bathrooms = $7
    OR bedrooms = $8
    `, [type, category, location, minPrice, maxPrice, numberOfRooms, numberOfBathrooms, numberOfBedrooms]);
