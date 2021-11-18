const { filterEstates } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  try {
    const {
      query: {
        type, category, location, price, roomNumbers, bathRooms, space,
      },
    } = req;
    const { rows } = await filterEstates({
      type, category, location, price, roomNumbers, bathRooms, space,
    });

    res.json({
      data: rows,
    });
  } catch (err) {
    next(err);
  }
};
