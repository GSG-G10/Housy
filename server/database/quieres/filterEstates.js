const connection = require('../config/connection');

module.exports = ({
  type, category, location, price, roomNumbers, bathRooms, space,
}) => {
  let text = 'SELECT * FROM estates WHERE ';
  const values = [];

  if (type) {
    text += `type = $${values.length + 1} AND `;
    values.push(type);
  }
  if (category) {
    text += `category = $${values.length + 1} AND `;
    values.push(category);
  }
  if (location) {
    text += `location = $${values.length + 1} AND `;
    values.push(location);
  }
  if (price) {
    text += `price >= $${values.length + 1} AND `;
    values.push(price);
  }
  if (roomNumbers) {
    text += `rooms >= $${values.length + 1} AND `;
    values.push(roomNumbers);
  }
  if (bathRooms) {
    text += `bathrooms >= $${values.length + 1} AND `;
    values.push(bathRooms);
  }
  if (space) {
    text += `space >= $${values.length + 1} AND `;
    values.push(space);
  }
  return connection.query({ text: text.slice(0, -4), values });
};
