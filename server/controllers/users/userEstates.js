const { userEstatesQuery } = require('../../database/quieres/index');

// eslint-disable-next-line consistent-return
const userEstateshandler = async (req, res) => {
  const { userId } = req.params;

  try {
    if (userId > 0) {
      const { rows } = await userEstatesQuery(userId);
      return res.json({
        data: rows,
      });
    }
    return res.status(404).json({
      message: 'enter valid user id',
    });
  } catch (err) {
    return res.status(500).json({
      message: `data Error: ${err}`,
    });
  }
};

module.exports = userEstateshandler;
