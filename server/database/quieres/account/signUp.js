const connection = require('../../connection');

module.exports = (userName, email, phone, password) => connection.query('INSERT INTO agents (name,email,phone,password) VALUES ($1,$2,$3,$4)', [userName, email, phone, password]);
