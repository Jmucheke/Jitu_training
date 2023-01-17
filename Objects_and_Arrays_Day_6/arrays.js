// defining arrays
// declared using square brackets

let names=[
 {
  name:"Pierra",
  age:15

 },
 {
  name:"Jesse",
  age:12

 },
 {
  name:"zenny",
  age:30

 },
 {
  name:"Joy",
  age:20

 } 
]

let firstnames=["Roy", "Christine", "Felix", "Joseph"]

// console.log(names.length)
// console.log(firstnames.length) // displays the length of the array

// push --> adds new item at the end of an array
firstnames.push("Jesse")
console.log("Push method");
console.log(firstnames);

// Unshift --> adds new item at the start of an array
firstnames.unshift("Zoey")
console.log("Unshift method");
console.log(firstnames);

// pop --> removes an item from the end of the array
firstnames.pop()
console.log("Pop method");
console.log(firstnames);

// shift --> removes an item from the start of the array
firstnames.shift()
console.log("Shift method");
console.log(firstnames);

// splice --> lets you change content of your array by removing or replacing existing elements with new ones
firstnames.splice(2)
console.log("Splice method");
console.log(firstnames);

// Fill --> fills the whole array with defined items
firstnames.fill("Kum Kum")
console.log("fill method");
console.log(firstnames);

// slice --> slices the whole array with defined items
firstnames=["Roy", "Christine", "Felix", "Joseph"]
let num = firstnames.slice(3)
console.log("slice method");
console.log(num);

// slice --> Joins two arrays
firstnames=["Roy", "Christine"]
let secondnames=["Felix", "Joseph"]
let fullnames = firstnames.concat(secondnames)
console.log("concat method");
console.log(fullnames);

// reverse --> Reverses the whole array
fullnames.reverse()
console.log(fullnames);

// sort --> sorts the whole array alphabetically
fullnames.sort()
console.log(fullnames);

// Filter - returns the items which meets a condition
let numbers = [23, 10, 55, 15, 4, 2, 8]
let numb = numbers.filter((x) => x>10)
console.log(numb)

// Map - Loops the whole array and return the item and index
let item = numbers .map((y,z) => console.log(`${y}, ${z}`))

// flat --> returns a new array with all the sub-array elements concatenated into it
numbers = [23, 10, 55, 15, 4, 2, 8, ["Roy", "Christine", "Felix", "Joseph"]]
numbers.flat()
console.log(numbers);

// indexOf --> Returns the index of the item
let jitu=[23, 10, 55, 15, 4, 2, 8]
fin = jitu.indexOf(55)
console.log(fin);

// findIndex --> RETURNS THE INDEX OF FIRST ITEM THAT PASSES THE CONDITION
let num1=jitu.findIndex((i) => i<4)
console.log(num1);

// Includes --> Check if a specific item is in the array or not
let num2 = jitu.includes(20)
console.log(num2);

// find --> returns the first item that passes the condition
let num3= jitu.find((a) => a>50)
console.log(num3);

// join --> joins all the items with a specific item between them

let num4 =jitu.join("------")
console.log(num4);