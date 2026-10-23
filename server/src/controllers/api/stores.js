const AbstractEntity = require('./AbstractEntity');

class Stores extends AbstractEntity {
    constructor() {
        super('stores');
    }
}

module.exports = new Stores();
