const connection = require('../config/connection');

module.exports = ({
  agentId, name, email, phone, avater,
}) => connection.query('UPDATE agent SET name=$1,email=$2,phone=$3,avater=$3 WHERE id=$4', [name, email, phone, avater, agentId]);
