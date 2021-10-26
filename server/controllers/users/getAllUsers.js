const { getAllUsersQuery } = require('../../database/quieres');

const getAllUsers = (req, res, next) => {
  getAllUsersQuery()
    .then(({ rows }) => res.json(({ data: rows })))
    .catch((err) => res.json({ err }))
    .catch((err) => next(err));
};
module.exports = getAllUsers;
