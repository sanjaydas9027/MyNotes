// Ways to create objects
//1. Object Literals: {}
const user = {
    name: "michel",
    age: 25,
    occupation: "engineer"
};

console.log(user.name);

//2. Constructor Function:

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this, price = price;
};

const c1 = new Car('Audi', 'Q7', '1,00,00,000');
const c2 = new Car('BMW', 'M7', '2,00,00,000');
console.log(c1.brand, c1.model);
console.log(c2.brand, c2.model);


//3. Class Style
class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    }
    addCart() {
        console.log(`${this.name} added product ${this.product} to cart`);
    }
}

// instance of class
const cust1 = new Customer('Ram', 'Ghee');
console.log(cust1.addCart());
console.log(cust1.name, cust1.product);


//4. Object.create(): with some prototype object
const employeePrototype = {
    printInfo: function () {
        console.log(`hello, emp name is : ${this.name}`);
    }
};

const e1 = Object.create(employeePrototype);
e1.name = "Rakesh";
e1.printInfo();


//5. Using Factory Functions: returns an object
function createDept(deptName, HOD) {
    return {
        deptName: deptName,
        HOD: HOD,
        getDeptInfo: function () {
            console.log(`${this.deptName} HOD is ${this.HOD}`);
        }
    }
};
let dept1 = createDept('Physics', 'H C Verma');
let dept2 = createDept('Maths', 'R D Sharma');
dept1.getDeptInfo();
dept1.getDeptInfo();



