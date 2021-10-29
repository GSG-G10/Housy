const { editEstateQuery } = require('../../database/quieres');
const { editEstateValidation } = require('../../utils/validation/editEstateValidation');

const editEstate = async (req, res, next) => {
  try {
    const result = await editEstateValidation.validateAsync({ ...req.body, ...req.params });
    const {
      estateId,
      title,
      price,
      description,
      type,
      category,
      street,
      city,
      region,
      bathrooms,
      bedrooms,
      rooms,
      space,
      available,
    } = result;
    await editEstateQuery(
      estateId,
      title,
      price,
      description,
      type,
      category,
      street,
      city,
      region,
      bathrooms,
      bedrooms,
      rooms,
      space,
      available,
    );
    res.json({ status: 200 });
  } catch (err) {
    next(err);
  }
};
module.exports = editEstate;
