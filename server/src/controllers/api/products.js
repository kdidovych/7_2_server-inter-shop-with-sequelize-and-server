const AbstractEntity = require('./AbstractEntity');

class Products extends AbstractEntity {
    constructor() {
        super('products');
    }
}

module.exports = new Products();
