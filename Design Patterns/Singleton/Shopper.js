const logger = require('./Logger');

// const logger = new Logger().getInstance();

class Shopper {
    constructor(name, money = 0) {
        this._shoppingList = []
        this.name = name;
        this.money = money;
        logger.log(`Shopper: ${name} has ${money}`);
    }

    addItemTolist(item) {
        this._shoppingList.push(item);
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);
        cloned._name = this.name;
        cloned._shoppingList = [...this._shoppingList];
        return cloned;
    }
}

module.exports = Shopper;