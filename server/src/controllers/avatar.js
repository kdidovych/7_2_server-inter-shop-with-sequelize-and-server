const sqlzModels = require('../models/sqlz');
const ResponseError = require("../errors/ResponseError");

class Avatar {
    setAvatar = async (req, res, next) => {
        try {
            const filename = req.file.filename;
            const id = req.body.id;
            const customer = sqlzModels.customers;
            const [count, [updatedCustomer]] = await customer.update(
                {avatar: filename},
                {
                    where: {id},
                    returning: ['id', 'email', 'avatar'],
                    raw: true,
                    fields: ['avatar']
                }
            );
            if (count !== 1) {
                next(new ResponseError(`Image was not updated`, {code: 400, shouldBeLogged: true}));
            }
            res.status(200).json(updatedCustomer);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new Avatar();
