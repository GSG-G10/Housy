const {deleteEstate} = require('../../database/quieres');
module.exports = async (req, res) => {
    const {estateId} = req.params;
    try{
      const row = await deleteEstate(estateId);
      console.log(row);
        if(row.rowCount > 0){
            res.status(200).json({
                message: 'Estate deleted successfully'
            })
        }else{
            res.status(404).json({
                message: 'Estate not found'
            })
        }
    }catch(err){
        console.log(err);
    next(err);
    }
}