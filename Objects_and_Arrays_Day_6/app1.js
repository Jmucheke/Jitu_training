// Primitive types
let firstname="Onan" //declares a memory space in stack memory
let secondname=firstname

secondname="Verah" // overwrites the value of firstname. 
// Stores by value
console.log(secondname)


// Reference types
let person={
 name:"Ian",age:12
}

let person1=person

person1.name="Cynthia"

console.log(person1.name)
console.log(person.name)


function sayName(){
 console.log("Felix")
}

let a = sayName()

console.log(Object.prototype(a))
