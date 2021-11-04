const { putAgent } = require('../../database/quieres');
const editAgentSchema = require('../../utils/validation/editAgentSchema');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { error, value } = editAgentSchema.validate({ ...req.body, userId });
    if (error) return res.status(400).json({ message: error.details[0].message });
    const { rowCount } = await putAgent(value);
    if (rowCount === 1) {
      return res.status(200).json({
        message: "Agent's data updated successfully",
      });
    }
    return res.status(404).json({
      message: 'There\'s no Agent, put correct id',
    });
  } catch (err) {
    if (err.detail) {
      return res.status(400).json({ message: err.detail });
    }
    return next(err);
  }
};
