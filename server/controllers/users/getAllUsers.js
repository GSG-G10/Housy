/* eslint-disable no-console */
const { getAllUsersQuery } = require('../../database/quieres');

const getAllUsers = async (req, res, next) => {
  try {
    const { rows } = await getAllUsersQuery();

    res.json(({ data: rows, msg: 'You are get all users' }));
  } catch (err) {
    next(err);
  }
};
module.exports = getAllUsers;
