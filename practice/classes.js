// A base class is defined using the new reserved 'class' keyword
class Polygon {

 // ..and an (optional) custom class constructor. If one is
 // not supplied, a default constructor is used instead:
 // constructor() { }
 constructor(height, width) {
  this.name = 'Polygon'
  this.height = height
  this.width = width
 }

 // Simple class instance methods using short-hand method
 // declaration

 sayName() {
  console.log(`Hi, I am a, ${this.name}.`);
 }

 sayHistory() {
  console.log(`"Polygon" is derived from the greek polus (many) and gonia (angle).`);
 }
}

let p = new Polygon(300, 400)
p.sayName()
p.sayHistory()
console.log("The width if this polygon is " + p.width);

// Creating a new class (expression - form)

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class.
const MyPoly = class Poly {
 getPolyName() {
  console.log(`Hi, I was created with a class expression. My name is ${Poly.name}`);
 }
}

let i = new MyPoly()
i.getPolyName()

// Classes support extending other classes, but can also extend
// other objects. Whatever you extend must be a constructor.
//
// Let's extend the Polygon class to create a new derived class
// called Square.

class Square extends Polygon {
 constructor(length) {
  // The reserved 'super' keyword is for making super-constructor
  // calls and allows access to parent methods.
  //
  // Here, it will call the parent class' constructor with lengths
  // provided for the Polygon's width and height

  super(length, length)
  // Note: In derived classes, super() must be called before you
  // can use 'this'. Leaving this out will cause a reference error.

  this.name = 'Square'
 }
 // Getter/setter methods are supported in classes,
// similar to their ES5 equivalents
 get area() {
  return this.height*this.width
 }

 set area(value){
  this.area=value
 }
}

let s = new Square(5)
s.sayName()
console.log("The area of this is " + s.area);



