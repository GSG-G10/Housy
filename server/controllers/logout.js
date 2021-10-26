const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'logged out Succefully' });
};
module.exports = logout;
