const { putAgent } = require('../../database/quieres');
const editAgentSchema = require('../../utils/validation/editAgentSchema');

module.exports = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { error, value } = editAgentSchema.validate({ ...req.body, userId });
    if (error) return res.status(400).json({ message: error.details[0].message });
    const { rowCount } = await putAgent(value);
    if (rowCount === 1) {
      res.status(200).json({
        message: "Agent's data updated successfully",
      });
    } else {
      res.status(404).json({
        message: 'There\'s no Agent, put correct id',
      });
    }
  } catch (err) {
    next(err);
  }
};
