// Static and Nonstatic keyword in JavaScript 

class Car {
    static wheels = 4;
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.wheels = 60;
    }
    static stop() {
        console.log('Car stopped');
    }
    drive() {
        console.log(this.name + " is driving");

    }
}

let c1 = new Car('Audi', 'Q7', 900000);
c1.drive();
Car.stop();

// static variable/function: call it by using class name
// non static variable/function: call it by using object reference name
