const AbstractEntity = require('./AbstractEntity');

class Inventory extends AbstractEntity {
    constructor() {
        super('inventory');
    }
}

module.exports = new Inventory();
