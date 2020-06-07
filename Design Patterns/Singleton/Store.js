const logger = require('./Logger');

// const logger = new Logger().getInstance();

class Store {
    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`Store: ${this.name} has ${inventory.length} items`);
    }
}

module.exports = Store;