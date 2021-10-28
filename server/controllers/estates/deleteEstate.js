const { deleteEstate } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  const { estateId } = req.params;
  try {
    const row = await deleteEstate(estateId);
    if (row.rowCount > 0) {
      res.status(200).json({
        message: 'Estate deleted successfully',
      });
    } else {
      res.status(404).json({
        message: 'Estate not found',
      });
    }
  } catch (err) {
    next(err);
  }
};
