/**
 * When you want to customize object creation process without creating subclasses for
 * them. eg:- In Android view.anime() is built on builder pattern
 */
class Bottle {
    constructor(color, material, capacity) {
        this.color = color;
        this.material = material;
        this.capacity = capacity;
    }

    getBottle() {
        return `Bottle is ${this.color}. It is made of ${this.material} and has capacity of ${this.capacity}`
    }
}

class BottleBuilder {
    constructor() {
        this.bottle = new Bottle()
    }
    addColor(color) {
        this.bottle.color = color;
        return this;
    }
    addMaterial(material) {
        this.bottle.material = material;
        return this;
    }
    addCapacity(capacity) {
        this.bottle.capacity = capacity;
        return this;
    }
    build() {
        return this.bottle;
    }
}

const milton = new BottleBuilder()
    .addColor('silver')
    .addCapacity('1 lit')
    .addMaterial('Steel')
    .build();

const cello = new BottleBuilder()
    .addColor('Pink')
    .addMaterial('plastic')
    .addCapacity('500 ml')
    .build()

console.log(milton.getBottle());
console.log(cello.getBottle());
