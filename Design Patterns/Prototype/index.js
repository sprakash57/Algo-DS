/*
Without prototype
const Shopper = require('../Singleton/Shopper');

const sunny = new Shopper('Sunny');
sunny.addItemTolist('Oregano');
sunny.addItemTolist('Chilly flakes');
sunny.addItemTolist('Pizza base');
sunny.addItemTolist('Veggies');

const indu = new Shopper('indu');
indu.addItemTolist('Oregano');
indu.addItemTolist('Chilly flakes');
indu.addItemTolist('Pizza base');
indu.addItemTolist('Meat');
*/


//With prototype
const scout_prototype = require('./scout.prototype');

const sunny = scout_prototype.clone();
sunny.name = 'Sunny';
sunny.addItemTolist('Veggies');

const indu = scout_prototype.clone();
indu.name = 'Indu';
indu.addItemTolist('Meat');

console.log(`${sunny.name}: ${sunny.shoppingList}`)
console.log(`${indu.name}: ${indu.shoppingList}`)