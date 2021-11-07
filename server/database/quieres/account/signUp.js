const connection = require('../../config/connection');

module.exports = (userName, email, phone, password) => connection.query('INSERT INTO agents (name,email,phone,password) VALUES ($1,$2,$3,$4) RETURNING id', [userName, email, phone, password]);
