"use strict";
// // kEYOF type of operator
// // type Person = {
// //  name:string,
// //  age: number,
// //  parent:{
// //   mother: string,
// //   father: string
// //  }
// // }
// // type F = keyof Person
// // let xs:F="parent"
// type Department={
//  hod:string
//  worker:string[]
//  name:string
//  records:object[]
// }
// type KeyOptions= keyof Department
// let xp:KeyOptions="hod"
// let IT:Department={
//  hod:'Mr Elvis',
//  worker:['John', 'Doe'],
//  name:"The IT Department",
//  records:[{}]
// }
// for(let keys in IT){
//  console.log(keys);
// }
// Partial
// interface Todo{
//  completed?:boolean,
//  date:Date
//  title:string
//  description:string
// }
// type OptionalTodo = Partial<Todo>
// type RequiredTodo = Required<OptionalTodo>
// // Record
// type StudentInfo={
//  name:string
//  hobbies:string[]
// }
// type kjhuti = string| number
// type Students = 'Roy'|'Verah'|'Onesmus'
// const StudentData:Record<Students,StudentInfo>={
//  Roy:{name:'Roy', hobbies:['Swimming']},
//  Verah: { name: 'Roy', hobbies: ['Swimming'] },
//  Onesmus: { name: 'Roy', hobbies: ['Swimming'] }
// }
// // Pick
// interface Todo{
//  completed?:boolean,
//  date:Date
//  title:string
//  description:string
// }
// type TodoHeader= Pick<Todo, 'title'|'Description'>
// type TodoHeader = Omit<Todo, 'title' | 'Description'>
// // Exclude
// interface Todo{
//  completed?:boolean,
//  date:Date
//  title:string
//  description:string
// }
// type TodoHeader = Omit<Todo, 'title' | 'Description'>
// type Distinct = Exclude<'a' | 'b' | 'c','b'>
// // type Distinct = Extract<'a' | 'b' | 'c', 'b'>
// let y:Distinct="c"
// const AnyFunction=()=>{
//  return 1
// }
// type AddFn=(a:number)=>number
// type N = ReturnType<AddFn>
// Instance of Type
class Dummy {
    constructor() {
        this.a = 'John Doe';
    }
}
let xf = {
    a: "fsjlk"
};
