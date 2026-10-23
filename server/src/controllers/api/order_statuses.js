const AbstractEntity = require('./AbstractEntity');

class OrderStatuses extends AbstractEntity {
    constructor() {
        super('order_statuses');
    }
}

module.exports = new OrderStatuses();
