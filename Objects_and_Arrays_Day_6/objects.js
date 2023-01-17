// Reference 
let person={
 name:"Ian", // string
 age:12, // number
 skillset:["java", "Javascript", "Python"], // array
 walk:function(){
  console.log(this) //using this
 },
 parent:{
  mother:"Alice",
  father:"Bob"
 }
}

console.log(person.walk);

// Acessing properties though dot notation and square bracket
// let x ="parent"
// console.log(person[x])
console.log(person.skillset) // dot notation
console.log(person["parent"].father) // using bracket

// Modifying the value of a property using = operator

person.age = 20

console.log(person.age)

// Adding a new property
person.weight=65
console.log(person.weight)

// Deleting a property
delete person.weight

// let x="age" in person
// console.log(x)

// checking what exists in an array
let x=Object.values(person)
console.log(x)

let moredetails={
 weight:98
}

Object.assign(person,moredetails)
console.log(person)

let parent =[
 {
  name:"Bob"
 },
 {
  name:"Alice"
 }
]

//accessing the object properties

// for (let x in parent){
//  console.log(parent[x]);
// }


