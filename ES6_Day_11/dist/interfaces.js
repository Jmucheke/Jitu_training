"use strict";
// // Interface
// interface Person{
//  readonly name:string
//  readonly age:number
// }
// interface Weight{
//  readonly weight:string
// }
// type MyType={
//  name:string
//  age:number
// }
// //type MyType=string|number
// let jesse:Person={
//  name:"Jesse",
//  age:100,
//  weight:"ht"
// }
// class Student implements Person{
//  public name: 'string'
//  public age = 100
//  print(){
//  }
// }
// Weak Map
// Example 1
const x = new WeakMap();
class Lorry {
    constructor(name) {
        this.name = '';
        x.set(this, name);
    }
    get myname() {
        return x.get(this);
    }
}
let l = new Lorry('Mercedes Benz');
console.log(x);
// Example 2
let _mileage = new WeakMap();
class Car {
    constractor(color) {
        // this.color = color
        _mileage.set(this, color);
    }
    hooting() {
        console.log(`${_mileage.get(this)}`);
    }
}
let obj = new Car();
console.log();
