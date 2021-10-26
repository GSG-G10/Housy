const { UserEstatesQuiery } = require('../../database/quieres/index');


const userEstates = async (req, res) => {

    const userid = req.body.userid;
  
    try {  
      const { rows } = await UserEstatesQuiery(userid);
      return res.json({
            data:rows,
            message: 'get data Successfully !' 
            });
    } catch (err) {
      return res.status(500).json({
        message: 'data Error: ' + err
        });
    }
};

module.exports = userEstates;
