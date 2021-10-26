const { GetallEstate } = require("../../database/quieres");

module.exports = (req, res, next) => GetallEstate().then(result => res.json(result.rows)).catch(err => next(err));