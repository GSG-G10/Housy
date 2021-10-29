const { putUser } = require('../../database/quieres');
const studentSchema = require('../../utils/validation/signUpSchema.js ');

module.exports = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const data = await studentSchema.validate(
      { ...req.body, studentId },
      { abortEarly: false },
    );
    const result = await putStudent(data);
    if (result.rowCount === 1) {
      res.json({
        StatusCode: 200,
        data: {
          message: "Student's data updated successfully",
        },
      });
    } else {
      res.status(404).json({
        StatusCode: 404,
        data: {
          message: 'There is no student for this id',
        },
      });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({ statusCode: 400, data: { message: err.errors } });
    } else if (err.detail) {
      res.status(409).json({
        statusCode: 409,
        data: {
          message: err.detail,
        },
      });
    } else {
      next(err);
    }
  }
};
