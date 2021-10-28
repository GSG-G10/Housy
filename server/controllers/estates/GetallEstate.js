const { GetallEstates } = require("../../database/quieres");

const GetallEstate = async(req, res, next) => {
    try {
        const { rows } = await GetallEstates();

        res.json(({ data: rows }));
    } catch (err) {
        next(err);
    }
};

module.exports = GetallEstate;