class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    refuel() {
        console.log(this.name + ' Car is refuled !')
    }
}

const c1 = new Car('Audi', 'Q7');
c1.refuel();
console.log(`Brand: ${c1.name} and model is: ${c1.model}`);



