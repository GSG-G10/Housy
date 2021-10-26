/* eslint-disable no-unused-vars */
const serverError = (req, res, next, err) => {
  res.status(500).json({ message: 'Server Error' });
};

module.exports = serverError;
