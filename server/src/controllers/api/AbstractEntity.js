const db = require('../../models/sqlz');
const ResponseError = require('../../errors/ResponseError');

/** General "Abstract" Controller to handle all similar entities CRUD requests */
class AbstractEntity {
    /** @param Model */
    model;
    LIMIT = 10000;

    constructor(modelName) {
        if (this.constructor === AbstractEntity) {
            const e = new Error("Abstract class cannot be instantiated directly.");
        }
        if (!modelName) {
            throw new Error("'modelName' properties should be provided to parent constructor");
        }
        this.model = db[modelName];
    }

    async getAll(req, res, next) {
        try {
            const result = await this.model.findAll({limit: this.LIMIT, raw: true});
            res.send({result});
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const result = await this.model.findByPk(req.params.id, {raw: true});
            res.send({result});
        } catch (error) {
            next(error);
        }
    }

    async createOne(req, res, next) {
        try {
            const result = await this.model.create(req.body.data, {raw: true});
            res.send({result});
        } catch (error) {
            next(error);
        }
    }

    async updateOne(req, res, next) {
        const rowData = {...req.body.data};
        const id = rowData.id;
        delete rowData.id;
        try {
            const [affectedCount, updatedRows] = await this.model.update(rowData, {where: {id}, returning: true});
            if (affectedCount === 0) {
                return next(new ResponseError(`Item with id=${id} was not found`, {code: 400, shouldBeLogged: true}));
            }
            res.send({result: updatedRows[0]});
        } catch (error) {
            next(error);
        }
    }

    async deleteById(req, res, next) {
        try {
            const deletedCount = await this.model.destroy({where: {id: req.params.id}});
            res.send({result: {deletedCount}});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AbstractEntity;
