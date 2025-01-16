# JavaScript Object-Oriented Programming (OOP) Concepts

JavaScript supports Object-Oriented Programming (OOP) principles that help developers create reusable, modular, and maintainable code. Below is a structured list of JavaScript OOP concepts with explanations, examples, and subtopics like `export` and access control.

---

## List of OOP Concepts in JavaScript

1. **Objects and Classes**
2. **Constructor Function**
3. **Inheritance**
4. **Encapsulation**
5. **Abstraction**
6. **Polymorphism**
7. **Method Overriding**
8. **Static Methods and Properties**
9. **Getters and Setters**
10. **Prototype and Prototypal Inheritance**
11. **Access Modifiers**
12. **Export and Import**

---

## Detailed Concepts and Examples

### 1. Objects and Classes

**Objects** are collections of properties and methods. **Classes** are templates for creating objects.

```javascript
// Define a class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  describe() {
    return `${this.brand} ${this.model}`;
  }
}

// Create an object
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.describe()); // Output: Toyota Corolla
```

### 2. Constructor Function

The **constructor** is a special method in a class that initializes new objects with values.

```javascript
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
  
  makeSound() {
    return `${this.type} says ${this.sound}`;
  }
}

const dog = new Animal("Dog", "Woof");
console.log(dog.makeSound()); // Output: Dog says Woof
```

### 3. Inheritance

**Inheritance** allows a class to inherit properties and methods from another class, promoting code reusability.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

let dog = new Dog("Buddy");
console.log(dog.eat()); // Output: Buddy is eating
console.log(dog.bark()); // Output: Buddy is barking
```

### 4. Encapsulation

**Encapsulation** restricts direct access to certain properties and methods. In JavaScript, you can simulate this using closures or **private fields** with the `#` symbol.

```javascript
class Person {
  #ssn; // Private field
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }

  getSSN() {
    return this.#ssn;
  }
}

let person = new Person("John", "123-45-6789");
console.log(person.name); // Output: John
console.log(person.getSSN()); // Output: 123-45-6789
console.log(person.#ssn); // Error: Private field '#ssn' must be declared
```

### 5. Abstraction

**Abstraction** hides complex implementation details and shows only the essential features. This is commonly achieved by defining abstract methods that are meant to be overridden.

```javascript
class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    throw "Area method must be implemented";
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(4, 5);
console.log(rect.area()); // Output: 20
```

### 6. Polymorphism

**Polymorphism** allows objects of different classes to be treated as instances of the same class through method overriding or interfaces.

```javascript
class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

let animals = [new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.speak()));
// Output: Woof! Meow!
```

### 7. Method Overriding

Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

```javascript
class Bird {
  fly() {
    return "Flying high!";
  }
}

class Penguin extends Bird {
  fly() {
    return "Penguins can't fly!";
  }
}

let penguin = new Penguin();
console.log(penguin.fly()); // Output: Penguins can't fly!
```

### 8. Static Methods and Properties

**Static methods and properties** belong to the class itself rather than to any object instance.

```javascript
class MathUtil {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.square(5)); // Output: 25
```

### 9. Getters and Setters

**Getters** and **setters** allow you to define accessors for properties, giving control over how values are accessed or modified.

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("Radius must be positive");
    }
  }
}

let circle = new Circle(10);
console.log(circle.radius); // Output: 10
circle.radius = -5; // Output: Radius must be positive
```

### 10. Prototype and Prototypal Inheritance

In JavaScript, objects can inherit properties and methods through their **prototype**. Prototypal inheritance is a powerful way to reuse code.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};

let person1 = new Person("Alice");
console.log(person1.greet()); // Output: Hello, my name is Alice
```

### 11. Access Modifiers

JavaScript doesn’t have traditional access modifiers like `public`, `protected`, and `private`, but **private fields** can be defined with the `#` symbol. By default, properties are `public`.

```javascript
class Employee {
  #id; // Private field
  constructor(name, id) {
    this.name = name;
    this.#id = id;
  }

  getId() {
    return this.#id;
  }
}

const emp = new Employee("Alice", 101);
console.log(emp.name); // Output: Alice
console.log(emp.getId()); // Output: 101
console.log(emp.#id); // Error: Private field '#id' must be declared
```

### 12. Export and Import

Modules allow us to separate code into multiple files, which can be **exported** and **imported**.

#### Export

```javascript
// car.js
export class Car {
  constructor(model) {
    this.model = model;
  }

  describe() {
    return `Car model: ${this.model}`;
  }
}
```

#### Import

```javascript
// main.js
import { Car } from './car.js';

const myCar = new Car("Toyota");
console.log(myCar.describe()); // Output: Car model: Toyota
```

---
