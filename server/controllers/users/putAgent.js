const { putAgent } = require('../../database/quieres');
const agentSchema = require('../../utils/validation/agentSchema');

module.exports = async (req, res, next) => {
  try {
    const { agentId } = req.params;
  } catch (err) {
    next(err);
  }
};
