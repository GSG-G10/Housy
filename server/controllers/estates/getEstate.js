const { getEstateQuery, getImagesQuery } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  const { estateId } = req.params;
  if (!(estateId > 0)) {
    return res.status(400).json({
      message: 'Invalid estate id',
    });
  }
  try {
    const { rowCount, rows } = await getEstateQuery(estateId);
    const images = await getImagesQuery(rows[0].id);

    if (rowCount > 0) {
      return res.json({
        data: rows,
        images: images.rows,
      });
    }
    return res.status(400).json({
      message: 'Estate not found',
    });
  } catch (err) {
    return next(err);
  }
};
