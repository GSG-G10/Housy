const { getAllEstateQuery } = require('../../database/quieres');

const getAllEstate = async (req, res, next) => {
  try {
    const { rows } = await getAllEstateQuery();
    res.json({
      data: rows,
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getAllEstate;
