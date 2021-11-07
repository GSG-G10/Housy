const { getEstateQuery } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  const { estateId } = req.params;
  if (!(estateId > 0)) {
    return res.status(400).json({
      message: 'Invalid estate id',
    });
  }
  try {
    const { rowCount, rows } = await getEstateQuery(estateId);
    if (rowCount > 0) {
      return res.json({
        data: rows,
      });
    }
    return res.status(400).json({
      message: 'Estate not found',
    });
  } catch (err) {
    return next(err);
  }
};
