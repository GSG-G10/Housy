const connection = require('../config/connection');

const editEstateQuery = (id, title, price, description, type, category, street,
  city, region, bathrooms, bedrooms, rooms, space, available) => (
  connection.query(
    `UPDATE estates SET title = $1, price = $2, description = $3, type = $4,
    category = $5, street = $6, city = $7, region = $8, bathrooms = $9, 
    bedrooms = $10, rooms = $11, space = $12, available = $13 WHERE id = $14;`,
    [title, price, description, type, category, street, city,
      region, bathrooms, bedrooms, rooms, space, available, id],
  ));
module.exports = editEstateQuery;
