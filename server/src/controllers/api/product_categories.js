const AbstractEntity = require('./AbstractEntity');

class ProductCategories extends AbstractEntity {
    constructor() {
        super('product_categories');
    }
}

module.exports = new ProductCategories();
