const { deleteEstateQuery } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  const { estateId } = req.params;
  // check is number
  if (!(estateId > 0)) {
    return res.status(400).json({
      message: 'Invalid estate id',
    });
  }
  try {
    const { rowCount } = await deleteEstateQuery(estateId);
    if (rowCount > 0) {
      return res.json({
        message: 'Estate deleted successfully',
      });
    }
    return res.status(400).json({
      message: 'You can\'t complete this process at the moment',
    });
  } catch (err) {
    return next(err);
  }
};
