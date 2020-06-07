const logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

// const logger = new Logger().getInstance();

logger.log('Starting app...');

const sunny = new Shopper('Sunny', 1000);
const pizzaShop = new Store('Pizzahut', [
    {
        item: "Chicken Mexicana",
        qty: 10,
        price: 399
    },
    {
        item: 'Chicken supreme',
        qty: 15,
        price: 499
    }
]);

logger.log('Finished configuration');

console.log(`Total logs: ${logger.count}`);
logger.logs.forEach(log => console.log(`${log.message} `))

//The problem - If you will run the application you will find only 2 log count. But wait there
//should be 4.
