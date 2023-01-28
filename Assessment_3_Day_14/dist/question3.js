"use strict";
// Accessing a private constructor
class Car {
    constructor(name) {
        this.mileage = 30;
        this.name = '';
        this.name = name;
    }
    getName(name) {
        this.name = name;
    }
    drive() {
        console.log('Drviving..');
    }
    changeMileage(value) {
        this.mileage = value;
    }
}
const car = new Car('');
car.getName("Mercedes Benz");
console.log(car);
