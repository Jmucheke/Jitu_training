// Using for....in
let numbers=[23, 43, 54, 65, 12, 54]

let num=0

for(let x in numbers){
 num += numbers[x]
}
console.log(num); // output is not as expected

// Using for....of

for(let y of numbers){
 console.log(y); // gives the expected output
}
