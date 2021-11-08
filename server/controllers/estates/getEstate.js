const { getEstateQuery, getImagesQuery } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  const { estateId } = req.params;
  if (!(estateId > 0)) {
    return res.status(400).json({
      message: 'Invalid estate id',
    });
  }
  try {
    const { rowCount, rows: estateData } = await getEstateQuery(estateId);
    const { rows: imagesData } = await getImagesQuery(estateId);
    if (rowCount > 0) {
      return res.json({
        data: { ...estateData, images: [...imagesData] },
      });
    }
    return res.status(400).json({
      message: 'Estate not found',
    });
  } catch (err) {
    return next(err);
  }
};
