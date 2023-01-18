 // Operators

 
 // Arithmetic operators
let x=20, y=30

console.log(x+y);
console.log(x-y);
console.log(y%x);
console.log(x*y);
 x++
console.log(x);
 x--
console.log(x);
x="30"

console.log(typeof(x));
// we use unary + to convert a string to a number
console.log(typeof(+x));

// Logical Operators

if (x>10 && y<50){
 console.log("Bigger than me")
} 

// Relational operators

console.log(x==y); // loose equality --> does not consider the data type hence true
console.log(x===y); // strict equality --> considers the data type hence false

// Assignment operators
x=30
x+=y
console.log(x);

// comma operators
x=5
y=7
let z =(x++,y++,x+y)
console.log(z); // 14

// IN property

let p={
 age:23
}
console.log("age" in p);

// delete property
delete p.age
console.log(p);

// Instance of

class Person{

}
 x=new Person()
 z=90
console.log()