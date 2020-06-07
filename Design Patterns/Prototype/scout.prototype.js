const Shopper = require('../Singleton/Shopper');

const scout = new Shopper();
scout.addItemTolist('Oregano');
scout.addItemTolist('Chilly flakes');
scout.addItemTolist('Pizza base');

module.exports = scout;