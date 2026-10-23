const AbstractEntity = require('./AbstractEntity');

class Orders extends AbstractEntity {
    constructor() {
        super('orders');
    }
}

module.exports = new Orders();
