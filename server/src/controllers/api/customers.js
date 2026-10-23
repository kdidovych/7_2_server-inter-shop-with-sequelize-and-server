const AbstractEntity = require('./AbstractEntity');
const ResponseError = require("../../errors/ResponseError");
const bcrypt = require('bcrypt');
const {SALT_ROUNDS} = require('../../consts');

class Customers extends AbstractEntity {
    constructor() {
        super('customers');
    }

    createOne = async (req, res, next) => {
        if (Object.hasOwn(req.body, 'password')) {
            try {
                req.body.data.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
            } catch (error) {
                next(new ResponseError(
                    `Error hashing password. ${error.inner.join('.')}`,
                    {code: 400, shouldBeLogged: true}
                ));
            }
        }
        await super.createOne(req, res, next);
    }

    updateOne = async (req, res, next) => {
        if (Object.hasOwn(req.body, 'password')) {
            try {
                req.body.data.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
            } catch (error) {
                next(new ResponseError(
                    `Error hashing password. ${error.inner.join('.')}`,
                    {code: 400, shouldBeLogged: true}
                ));
            }
        }
        await super.updateOne(req, res, next);
    }
}

module.exports = new Customers();
