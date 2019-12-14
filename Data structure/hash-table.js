class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    static PRIME = 31;

    _hash(key) {
        let total = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key.charCodeAt(i) - 96;
            total = (total * HashTable.PRIME + value) % this.keyMap.length;
        }
        return total
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        for (let item of this.keyMap[index]) {
            if (item[0] === key) return item[1]
        }
        return undefined;
    }

    keys() {
        let keyList = []
        for (let item of this.keyMap) {
            if (item) {
                for (let j = 0; j < item.length; j++) {
                    if (!keyList.includes(item[j][0])) {
                        keyList.push(item[j][0])
                    }
                }
            }
        }
        return keyList;
    }

    values() {
        let valueList = [];
        for (let item of this.keyMap) {
            if (item) {
                for (let j = 0; j < item.length; j++) {
                    if (!valueList.includes(item[j][1])) {
                        valueList.push(item[j][1])
                    }
                }
            }
        }
        return valueList;
    }
}

let ht = new HashTable();
ht.set('student', 6)
ht.set('se', 5)
ht.set('sse', 4)
ht.set('ta', 3)
ht.set('sta', 3)
ht.set('tl', 1)
// console.log(hashTable);
console.log(ht.keys());