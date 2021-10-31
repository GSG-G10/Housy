const { deleteEstate } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  const { estateId } = req.params;
  // check is number
  if (!(estateId > 0)) {
    return res.status(400).json({
      message: 'Invalid estate id',
    });
  }
  try {
    const { rowCount } = await deleteEstate(estateId);
    if (rowCount > 0) {
      res.status(200).json({
        message: 'Estate deleted successfully',
      });
    } else {
      res.status(400).json({
        message: 'You can\'t complete this process at the moment',
      });
    }
  } catch (err) {
    next(err);
  }
};