"use strict";
// // Intersection Types
// type Animal={
//  name:string
//  age:number
// }
// type Living={
//  eat:boolean
//  breath:boolean
// }
// type Human = Animal & Living
// let person:Human={
//  name:'John Doe',
//  age:30,
//  eat:true,
//  breath:true
// }
// type StringNumber = string | number
// type BooleanNumber = boolean | number
// type Allcombined = StringNumber & BooleanNumber
// type Allcombined2 = StringNumber | BooleanNumber
// Type Guards
// type Manager={
//  name:string,
//  roles:string[],
//  access:boolean,
//  workers:string[]
// }
// type Cashier={
//  name:string,
//  roles:string[],
//  startDate:Date
// }
// type Employee = Manager | Cashier
// let x:Employee={
//  name:'John Doe',
//  roles:['File Returns'],
//  startDate:new Date()
// }
// let z:Employee={
//  name:'John Doe',
//  roles:['File Returns'],
//  startDate:new Date(),
//  access:true,
//  workers:['max']
// }
// function CheckEmployee(x:Employee){
//  if('workers' in x){
//   console.log("This is a Manager");
//   console.log(x.workers);
//  }
//  else{
//   console.log("This is a Worker");
//  }
// }
// CheckEmployee(x)
//  type StringNumber = string | number
//  function Add(a:StringNumber, b:StringNumber):StringNumber{
//   if(typeof(a)==='string' || typeof(a)==='string'){
//    return a.toString()+ b.toString()
//   }
//    return a + b
//  }
// console.log(Add('12',34));
// class Car{
//  drive(){
//   console.log('Driving');
//  }
// }
// class Van{
//  drive(){
//   console.log('Driving');
//  }
//  passengers=11
// }
// type Vehicle = Car | Van
// const c = new Car()
// const t = new Van()
// function CheckCar(v:Vehicle){
//  v.drive()
//  if('passengers' in v){
//   console.log(v.passengers);
//  }
// }
// CheckCar(t)
// // method to declare an element
// const input = <HTMLInputElement> document.querySelector('.username')!
// // Type Casting
// const input =  document.querySelector('.username')! as HTMLInputElement
// input.value='Hi There'
// // Function Overloading
//  type StringNumber = string | number
//  function Add(a:string, b:string):string
//  function Add(a:number, b:string):string
//  function Add(a:string, b:number):string
//  function Add(a:number, b:number):number
//  function Add(a:StringNumber, b:StringNumber):StringNumber{
//   if(typeof(a)==='string' || typeof(b)==='string'){
//    return a.toString()+ b.toString()
//   }
//    return a + b
//  }
//  const a = Add("Hello", "World")
//  a.split(' ')
// let user={
//  name:'John Doe',
//  age:30,
//  profile:{
//   image:'hads'
//  }
// }
// console.log(user?.profile?.image); // Optional Chaining
// let x = null
// let y = x || 'John Doe'
{
    meassage: 'hey man';
}
let x = { email: 'Please Enter an Email' };
