// // class Vehicle{
// //  private owners:string='Some Guy'
// //  fuel(){
// //   console.log('Fueling');
  
// //  }
// //  speed(){
// //   console.log('speeding');
  
// //  }
// // }
// // class Car extends  Vehicle{

// //  private mileage = 16
// //  // constructor(public name:string){
// //  //  super()
// //  // }
// //  name:string=''
// //  constructor(name:string){
// //   super()
// //   this.name=name
   
// //   }
  

// //  drive(){
// //   console.log('Drviving..');
  
// //  }

// //  changeMileage(value:number){
// //   this.mileage=value
// //  }
// // }
// // const car = new Car('Mercedes Benz')
// // // car.fuel()
// // // car.owners()

// // car.changeMileage(20)
// // console.log(car);


// //Math.PI // STATIC PROPERTY since we are accessing it through the Class name

// // const m = new Math()
// // m.PI // instance property

// // class OurMath{
// //  static PI = 3.14

// //  getRandom(){
// //   return Math.random
// //  }
// //  cname='This is a guy'
// // }

// // const c = new OurMath()
// // c.cname
// // console.log(OurMath).PI;

// // // Abstract classes

// // abstract class SomeCommonBehaviour{
// //  abstract beOnTime(n:string):void
// // }

// // class Student extends SomeCommonBehaviour{
// //  constructor(){
// //   super()
// //  }
// //  beOnTime(n: string): void {
// //   console.log(n);
  
// //  }
// // }

// // class Employee extends SomeCommonBehaviour{
// //  beOnTime(n: string): void {
  
// //  }
// //  constructor(){
// //   super()
// //  }
// // }

// interface Todo{
//  title:string
//  description:string
//  date:Date
// }

// interface CompletedTodos{
//  completeed:boolean
// }
// let c:CompletedTodos={
//  title:'',
//  description:'',
//  date:new Date()
// }
// let todos:Todo[]

// // interface CarInterface{
// //  drive:()=>void
// //  load:()=>void
// //  passengers:number
// // }

// // class Van implements CarInterface{
// //  drive(){

// //  }
// //  load(){

// //  }
// //  passengers=20
// // }


// enum Gender {'Male', 'Female'}

// interface GnederValue{
//  readonly Gender:'Male'|'Female'
// }

// let personGender:GenderValues={
//  Gender:'Female'
// }

// type x = 'male'|'female'

// let personGender:x='female'

// interface d{
//  name:string
//  gender:'male'|'female'
// }


class Vehicle{
 private owners:string='Some Guy'
 fuel(){
  console.log('Fueling');
  
 }
 speed(){
  console.log('speeding');
  
 }
}

class Car extends  Vehicle{

 mileage = 16
 // constructor(public name:string){
 //  super()
 // }
 name:string=''
 private constructor(name:string){
  super()
  this.name=name
   
  }
  

 drive(){
  console.log('Drviving..');
  
 }

 changeMileage(value:number){
  this.mileage=value
 }
}
const car = new Car('Mercedes Benz')
// car.fuel()
// car.owners()

car.changeMileage(20)
console.log(car);