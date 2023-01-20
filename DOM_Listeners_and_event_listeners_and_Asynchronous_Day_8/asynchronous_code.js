// const getUser=()=>{
//  setTimeout(()=>{
//   return({name:"Robert"},2000)
//  })
// }

// const user = getUser()
// console.log(user.name); // throws an error

// Using callback
// const getUser=cb=>{
//  setTimeout(()=>{
//   cb({name:"Robert"},2000)
//  })
// }

// const callbackfn=user=>{
//  console.log(user.name);
// }
// const user = getUser(callbackfn)

// const btn = document.getElementById('btn')
// function trackme(){
//  navigator.geolocation.getCurrentPosition(position=>{
//   setTimeout(()=>{

//   })
  
//  },
//  err=>{
//   console.log(err);
//  })
 

// }
// btn.addEventListener('click', trackme)
// console.log("Hello world");

// Promises

// function setTimer(duration){
//  const promise = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//   resolve("You are now a full stack developer")
//  },duration)

//  })
//  return promise
// }

// function setTimer(3000).then(message=>{
//  console.log(message);
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response) => response.json())
// .then((data) => console.log(data))