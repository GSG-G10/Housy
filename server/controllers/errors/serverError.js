/* eslint-disable no-unused-vars */
const serverError = (err, req, res, next) => {
  res.status(500).json({ message: 'Server Error' });
};

module.exports = serverError;
