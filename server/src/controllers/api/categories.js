const AbstractEntity = require('./AbstractEntity');

class Categories extends AbstractEntity {
    constructor() {
        super('categories');
    }
}

module.exports = new Categories();
