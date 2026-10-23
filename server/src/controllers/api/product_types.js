const AbstractEntity = require('./AbstractEntity');

class ProductTypes extends AbstractEntity {
    constructor() {
        super('product_types');
    }
}

module.exports = new ProductTypes();
