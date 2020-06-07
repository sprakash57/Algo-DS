/**
 * Define an interface for creating an object
 * but let subclasses decide which class to 
 * instantiate. eg:- document.createElement() works on same principle
 */

class Document {
    render() {
        return null;
    }
}

class Div extends Document {
    render() {
        return '<div/>'
    }
}

class Section extends Section {
    render() {
        return '<section />'
    }
}

class DomFactory {
    createElement(type) {
        switch (type) {
            case 'div':
                return new Div()
            case 'section':
                return new Section()
            default:
                break
        }
    }
}

const domFactory = new DomFactory();
console.log(domFactory.createElement('div'));