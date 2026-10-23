const AbstractEntity = require('./AbstractEntity');

class ProductModels extends AbstractEntity {
    constructor() {
        super('product_models');
    }
}

module.exports = new ProductModels();
