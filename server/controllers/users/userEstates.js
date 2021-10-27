const { UserEstatesQuiery } = require('../../database/quieres/index');

const userEstateshandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const { rows } = await UserEstatesQuiery(userId);
    return res.json({
      data: rows,
      message: 'get data Successfully !',
    });
  } catch (err) {
    return res.status(500).json({
      message: `data Error: ${err}`,
    });
  }
};

module.exports = userEstateshandler;
