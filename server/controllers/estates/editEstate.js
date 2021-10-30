const { editEstateQuery } = require('../../database/quieres');
const { editEstateValidation } = require('../../utils/validation/editEstateValidation');

const editEstate = async (req, res, next) => {
  try {
    const {
      estateId, title, price, description,
      type, category, street, city, region,
      bathrooms, bedrooms, rooms, space, available,
    } = await editEstateValidation.validateAsync({ ...req.body, ...req.params });

    const editResult = await editEstateQuery(
      estateId, title, price, description, type,
      category, street, city, region, bathrooms,
      bedrooms, rooms, space, available,
    );
    if (editResult.rowCount === 0) {
      res.status(406).json({ status: 406, msg: 'enter valid estate id ' });
    }

    res.json({ status: 200 });
  } catch (err) {
    next(err);
  }
};
module.exports = editEstate;
