class Entity {
    constructor(name) {
        this.name = name;
    }
}

class Stuff extends Entity {
    constructor(name) {
        super(name);
    }
}

class Box extends Entity {
    stuff = []
    constructor(name) {
        super(name);
    }
    addStuff(obj) {
        this.stuff.push(obj)
    }
    toString() {
        return `name: ${this.name}, stuff: ${JSON.stringify(this.stuff)}`
    }
}

class User extends Entity {
    constructor(name, box) {
        super(name);
        this.box = box;
    }
}

let stuff1 = new Stuff('Phone');
let stuff2 = new Stuff('Computer');
let stuff3 = new Stuff('Television');
let box = new Box('My device');
box.addStuff(stuff1)
box.addStuff(stuff2)
box.addStuff(stuff3)
let user = new User('Nick', box.toString());

console.log(user)
