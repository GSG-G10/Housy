const connection = require('../config/connection');

module.exports = ({
  userId, username, email, phone, avater = '',
}) => connection.query('UPDATE agents SET name=$1,email=$2,phone=$3,avater=$4 WHERE id=$5', [username, email, phone, avater, userId]);
