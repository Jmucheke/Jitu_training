// Accessing a private constructor
class Car {
 mileage = 30
 name: string = ''
 private constructor(name: string) {
  this.name = name

 }
 getName (name: string) {
  this.name=name
 }


 drive() {
  console.log('Drviving..');

 }

 changeMileage(value: number) {
  this.mileage = value
 }
}


const car = new Car('')

car.getName("Mercedes Benz")
console.log(car);
