const { getAllUsersQuery } = require('../../database/quieres');

const getAllUsers = async (req, res) => {
  try {
    const resalut = await getAllUsersQuery();
    const { data } = resalut;
    res.json(({ data: data.rows }));
  } catch (err) {
    res.json({ err });
  }
};
module.exports = getAllUsers;
