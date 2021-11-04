const { filterEstates } = require('../../database/quieres');

module.exports = async (req, res, next) => {
  try {
    const estates = await filterEstates(req.params);
    console.log(estates);
  } catch (err) {
    next(err);
  }
};
