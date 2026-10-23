const AbstractEntity = require('./AbstractEntity');

class ProductBrands extends AbstractEntity {
    constructor() {
        super('product_brands');
    }
}

module.exports = new ProductBrands();
