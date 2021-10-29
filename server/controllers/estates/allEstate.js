const { getAllEstateQuery } = require('../../database/quieres');

const getAllEstate = async (req, res, next) => {
  try {
    const { rows } = await getAllEstateQuery();
    res.json({ data: rows });
  } catch (err) {
    next(err);
  }
};
module.exports = getAllEstate;
