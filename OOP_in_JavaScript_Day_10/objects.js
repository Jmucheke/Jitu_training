// Object Literals {}
// let brian ={
//  name:"Brian",
//  age:15
// } // There's repetition of code


// // Function factory
// function Person(name,age){
//  return{
//   name, age
//  }
// }
// const cynthia = Person('Cynthia',12)
// console.log(cynthia);

// // Constructor

// function Vehicle(){
//  this.hoot=function(){ // Instance member
//   console.log("Hooting");
//  } 
// }
// Vehicle.prototype.speed=function(){ // Prototype member
//   console.log("speeding");
//  }
//  Vehicle.prototype.fuel=function(){ // Prototype member
//   console.log("fueling");
//  }

//  const v = new Vehicle()

//  function Car(){
  
//  }
// // Car.prototype = Object.create(v)
// Car.prototype = new Vehicle()
// Car.prototype.constructor=Car
// Car.prototype.drive=function(){
//  console.log("Driving");
// }
// const c = new Car()



// // Objects
// const circle = {
//   radius:1, // object  property
//   location:{  // object  property
//   x:1,
//   y:1
// },
// draw: function(){ // object method
//   console.log('draw');
// }}

// circle.draw()

// Factories

// // Using a factory reconstractor function
// function createCircle(radius){
//   return {
//   radius, // object  property
//   draw: function(){
//     console.log('draw');
//   }
// }
// }
// const circle = createCircle(1)
// circle.draw()

// // Constructors
// function createCircle(radius){
//   return {
//   radius, // object  property
//   draw: function(){
//     console.log('draw');
//   }
// }
// }
// const circle = createCircle(1)
// //consturctor fnction
// function Circle(radius){
//   this.radius = radius
//   this.draw = function(){
//     console.log('draw');
//   }
// }
// const another = new Circle(1)

// Constructor property

// function Circle(radius){
//   this.radius = radius
//   this.draw = function(){
//     console.log('draw');
//   }
// }

// Circle.call({},1)
// Circle.apply({}, [1,2,3,4])
// const another = new Circle(1)

// // Value vs Reference Types
// let x = 10
// let y = x

// x=20

// let number = 10
// function increase(number){
//   number++
// }
// increase(number)
// console.log(number);// 10

// let obj ={value: 10}
// function increase(obj){
//   obj.value++
// }
// increase(obj)
// console.log(obj); // output: 11


// // Adding and removing properties

// function Circle(radius){
//   this.radius = radius
//   this.draw = function(){
//     console.log('draw');
//   }
// }

// const circle = new Circle(10)

// circle.location = {x:1}

// // enumerating properties
// function Circle(radius){
//   this.radius = radius
//   this.draw = function(){
//     console.log('draw');
//   }
// }

// const circle = new Circle(10)

// for (let key in circle){
//   if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle)
// console.log(keys );

// if ('radius' in circle)
// console.log("Circle has a radius");

