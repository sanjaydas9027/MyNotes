// method overriding

class Car {
    minSpeed = 100;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log('Starting Engine');
    }
}
class Audi extends Car {
    startEngine() {
        console.log('Starting Engine Audi with Push Button');
    }
}


let audi = new Audi();
audi.startEngine();
console.log(audi.minSpeed);

