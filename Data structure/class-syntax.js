class Student {
    constructor(f, l, g) {
        this.f = f;
        this.l = l;
        this.g = g;
        this.late = 0;
    }

    get bio() {
        return `i am ${this.f} ${this.l} of grade ${this.g}`;
    }

    markLate() {
        this.late += 1;
        return `You are late ${this.late} times`;
    }

    static enroll(...students) {
        return 'you have enrolled successfully';
    }
}

let mark = new Student('mark', 'evans', 1);
console.log(mark.enroll());