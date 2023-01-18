// Template literal
let name= `John`

// // Array and object destructuring
// let person={
//  names:"John",
//  secondName:"Maina",
//  thirdName:"Mucheke",
//  parent:{
//   mother:'Alice',
//   father:'John'
//  }
// }

// let {thirdName}=person
// console.log(thirdName);

// let {parent}=person
// let {father}=parent
// console.log(father);

// let names=["Samuel", "Christine", "John", "Mark"]
// let [one, , three]=names
// console.log(one,three);

// let [two, , ...four]=names

let person={
 names:"John",
 secondName:"Maina",
 thirdName:"Mucheke",
 parent:{
  mother:'Alice',
  father:'John'
 }
}

// Traditional way of accessing the properties of the objects
console.log(person['parent'].mother);

// Applying destructuring
// let {parent}=person
// let {mother}=parent
// console.log(mother);

// let {names,secondName, thirdName}=person
// console.log(thirdName);

// let {names:j,secondName:k, thirdName:m}=person
// console.log(m);

// let {parent:{father}}=person
// console.log(father);

// // Assigning variables from an array
// let[q,,,r] = [1,2,3,4,5,6]
// console.log(q,r);

// Rest operator to reassign array elements (...)rest operator assigns the other variables to the rest variable
let[q,r, ...rest] = [1,2,3,4,5,6]
console.log(q,r);
console.log(rest);

let num1=[1,2,3,4,5,6]
let num=[100,12,45,...num1]
console.log(num);

