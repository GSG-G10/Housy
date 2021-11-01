const { editEstateQuery } = require('../../database/quieres');
const { editEstateValidation } = require('../../utils/validation/editEstateValidation');

const editEstate = async (req, res, next) => {
  try {
    const {
      estateId, title, price, description,
      type, category, street, city, region,
      bathrooms, bedrooms, rooms, space, available,
    } = await editEstateValidation.validateAsync({ ...req.body, ...req.params });

    const { rowCount } = await editEstateQuery(
      estateId, title, price, description, type,
      category, street, city, region, bathrooms,
      bedrooms, rooms, space, available,
    );

    if (rowCount === 0) {
      res.status(400).json({ status: 400, message: 'enter valid estate id ' });
    } else {
      res.json({ message: 'Estate updated successfully' });
    }
  } catch (err) {
    if (err.details) {
      res.status(400).json({ status: 400, message: err.details.message });
    } else {
      next(err);
    }
  }
};
module.exports = editEstate;
