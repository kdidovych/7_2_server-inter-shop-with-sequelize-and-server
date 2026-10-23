const AbstractEntity = require('./AbstractEntity');

class OrderItems extends AbstractEntity {
    constructor() {
        super('order_items');
    }
}

module.exports = new OrderItems();
