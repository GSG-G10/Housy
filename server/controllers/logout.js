const logout = (req, res) => {
  res.clearCookie('token');
};
module.exports = logout;
