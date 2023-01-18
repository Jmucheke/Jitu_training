function find_factorial(x){
 if(x==0){
  return 1
 }
 else {
  return x *find_factorial(x-1)
 }
}

let number = 10
let result =find_factorial(number)
console.log(`The factorial of ${number} is ${result}`);