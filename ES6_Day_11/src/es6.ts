// function Add(a:number, b:number){
//  return a+b
// }

// console.log(Add(12,45))

// // Es6
// // ARROW FUNCTION =>
// const Add =(a:number, b:number)=> a+b // automatically adds a return keyword
// console.log(Add(12,45));

// // Template literals ``

// let a = "Happy coding"
// let b = 'Hello World'
// let c = `Typescript is a nice language ${a}`

// // Defaut parameters
// const Add = (a:number=20, b:number=30)=> a+b

// console.log(Add(12,10));
// console.log(Add(12));
// console.log(Add(12));

// Destructuring arrays and objects

// let person ={
//  firstname:'John Doe',
//  folks:{
//   mother:'Alice',
//   father:'Mark'
//  },
//  age:10
// }

// let {folks} = person

// let fruits = [
// {name:'Watermelon',price:100},
// {name:'apples',price:200},
// {name:'Guava',price:50},
// {name:'mangoes',price:400}]
// let [x,y,,z]= fruits
// console.log(fruits[0]);
// console.log(x,y,z);

// let {price}=x
// console.log(price);

// Promises
// const promise:Promise<string> = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//   resolve("typescript")
//  },3000)
//  })
//  promise.then(message=> console.log(message.toString()))

// rest
// let fruits = [
// {name:'Watermelon',price:100},
// {name:'apples',price:200},
// {name:'Guava',price:50},
// {name:'mangoes',price:400}]

// let [x, ...z]= fruits
// console.log(z);

// let x={name:'christine',age:23}

// // for(let keys of x){
// //  console.log(keys);
// // }
// for(let keys in x){
//  console.log(keys); 
// }

async function getData():Promise<{userId:number,id:number,title:string, completed:string}[]>{
 let data=await fetch('https://jsonplaceholder.typicode.com/todos')
 let post = await data.json()
  console.log(data);

 return post
}

getData().then(
 data=>{
  console.log(data);
  
 }
)