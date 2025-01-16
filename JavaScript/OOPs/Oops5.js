// Inheritance in JavaScript 


// parent class (super class)
class Vehicle {
    constructor(make, model) {
        this.model = model;
        this.make = make;
    }
    getInfo() {
        return `${this.make}, ${this.model}`;
    };
    startEngine() {
        console.log('Engine Started ...');
    };
}

// child class ( sub class)

class Car extends Vehicle {
    constructor(make, model, fuelType) {
        super(make, model);
        this.fuelType = fuelType;
    }

    driveCar() {
        console.log('Driving car...' + this.model);
    };
}
class Truck extends Vehicle {
    constructor(make, model, loadCapacity) {
        super(make, model);
        this.loadCapacity = loadCapacity;
    }

    driveTruck() {
        console.log('Driving Truck...' + this.model);
    };
}

const car = new Car('Honda', 'Civic', 'Petrol');
const truck = new Truck('Tata', '4825 .TK', '55 TON');

car.startEngine();
console.log(car.getInfo());
truck.driveTruck();
truck.startEngine();
console.log(truck.getInfo());

