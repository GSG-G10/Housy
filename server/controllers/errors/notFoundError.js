/* eslint-disable no-unused-vars */
const notFoundError = (req, res, next) => {
  res.status(404).json({ message: 'Page Not Found' });
};

module.exports = notFoundError;
