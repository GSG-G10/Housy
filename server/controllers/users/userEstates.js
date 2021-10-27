const { UserEstatesQuery } = require('../../database/quieres/index');

const userEstateshandler = async (req, res) => {
  const { userId } = req.params;

  try {
    if (userId > 0) {
      const { rows } = await UserEstatesQuery(userId);
      return res.json({
        data: rows,
      });
    }
    res.status(404).json({
      message: 'enter valid user id',
    });
  } catch (err) {
    return res.status(500).json({
      message: `data Error: ${err}`,
    });
  }
};

module.exports = userEstateshandler;
