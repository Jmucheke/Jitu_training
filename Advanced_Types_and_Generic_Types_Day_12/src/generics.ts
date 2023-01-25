// let names:string[] = ['Ian', 'Elvis']

// let people:Array<string>=['Ian', 'Elvis']

// const promise = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//   resolve("Hello world")
//  }, 3000)
 



// promise.then(data=>{
//  console.log(data.toUpperCase);
 
// })

// // Custom generic type
// function MergeObjects<T extends Object, U>(ObjA:T, ObjB:U){
//  return Object.assign(ObjA,ObjB)
// }
// const merged = MergeObjects({
//  name:"John Doe"},
//  hobbies['cycling', 'driving'],
//  age:30)


// console.log(merged.parent.father);

// let person ={
//  name:'John Doe',
//  age:30
// }

// // for (let key in person)
// // console.log(person[key]);
//  function CheckProperty<T extends object, U extends T>(obj:T, key:U){
//   return obj(key)
//  }

//  console.log(CheckProperty(person, age));

// class Datastore<T>{
//  data:T[] = []

//  addItem(item:T){
//   this.data.push(item)
//  }

//  removeItem(item:T){
//   this.data.splice(this.data.indexOf(item),1)
//  }

//  getData(){
//   return [...this.data]
//  }
// }

// const stringDataStore = new Datastore<string>()
// stringDataStore.addItem('John')
// stringDataStore.addItem('Kim')
// stringDataStore.addItem('Phil')
// stringDataStore.addItem('Cynthia')

// stringDataStore.removeItem('John')
// console.log(stringDataStore.getData());

type person={
 name:string
 age:number
}

function AddPerson(name:string, age:number):person{
 let person1:Partial<person>={}
 if(name.length>5){
  person1.name=name
 }else{
  person1.name='John Doe'

 }
 if(age>10){
  person1.age=age

 
 }else{
  person1.age=20
 }

 return person1 as person
}
console.log(AddPerson('kuku',15));

