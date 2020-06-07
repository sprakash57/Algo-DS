class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timeStamp = new Date().toISOString();
        this.logs.push({ message });
        console.log(`${message} - ${timeStamp}`);
    }
}

//The Solution - Singleton class

/* Solution 1.
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}
module.exports = Singleton;
*/

//Solution 2.
// In node.js its not necessary to write singleton class at all. Just export the new instance
module.exports = new Logger();