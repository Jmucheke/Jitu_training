// class SimpleClass{
//  id:number | undefined;
//  print():void{
//   console.log("SimpleClass.print()called");
  
//  }
// }
// let mySimpleClass = new SimpleClass()
// console.log(mySimpleClass);

// // This keyword
//  class SimpleClass{
//  id:number | undefined;
//  print():void{
//   console.log(`SimpleClass.id = ${this.id}`);  
//  }
// }
// let mySimpleClass = new SimpleClass()
// mySimpleClass.id=2023
// console.log(mySimpleClass);

// // Class constructors
// class ClassWithConstructors{
//  id:number | undefined
//  constructor(_id:number){
//   this.id=_id
//  }
// }

// let ClassWithConstructor = new ClassWithConstructors(20)
// console.log(`classWithConstructor = ${JSON.stringify(ClassWithConstructor)}`);

// Public access
// class publicTest{
//  id:number | undefined
//  }
// let publicAccess = new publicTest()
// publicAccess.id = 2023
// console.log(publicAccess);



// // Private access
// class privateTest{
//  private id:number
//  constructor(id:number){
//   this.id = id
//  }
// }
// let privateAccess = new privateTest()
// privateAccess.id =2024
// console.log(privateAccess);



// read only

// class readOnly{
//  readonly name:string | undefined
//  constructor(_name:string){
//   this.name = _name
//  }
//  setNameValue(_name:string){
//   this.name = _name
//  }
// }

// Getters and setters

class accessTest{
 private _id: number =  0
 get id():number{
  console.log("Get ID property");
  return this._id  
 }
 set id(value:number){
  console.log("Set ID property");
  this._id = value
   }
}
let accesstest = new accessTest()
accesstest.id = 2023
console.log(`${accesstest}`);
