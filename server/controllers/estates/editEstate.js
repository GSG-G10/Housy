/* eslint-disable no-console */
const { editEstateQuery } = require('../../database/quieres');

const editEstate = async (req, res, next) => {
  const { estateId } = req.params;
  const {
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
  } = req.body;
  try {
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
    res.json();
  } catch (err) {
    next(err);
  }
};
module.exports = editEstate;
