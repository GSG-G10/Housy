const { UserEstatesQuery } = require('../../database/quieres/index');

const userEstateshandler = async (req, res) => {
  const { userId } = req.params;

  if (userId > 0) {
    try {
      const { rows } = await UserEstatesQuery(userId);
      return res.json({
        data: rows,
      });
    } catch (err) {
      return res.status(500).json({
        message: `data Error: ${err}`,
      });
    }
  } else {
    res.status(404).json({
      message: 'enter valid user id',
    });
  }
};

module.exports = userEstateshandler;
