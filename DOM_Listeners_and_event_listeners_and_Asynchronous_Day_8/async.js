// async function getData(){
//  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//  const data = await response.json()
//  console.log(data);
// }

// getData()

// Using Promises to consume API
fetch("https://jsonplaceholder.typicode.com/todos")
 .then((res) =>{
  return res.json();
 })
 .then((data)=>{
  data.forEach((person)=>{
   const contents=`<li>${person.title}</li>`
   document.getElementById("list").insertAdjacentHTML('beforeend',contents);
   console.log(contents); 
  })
 })

 .catch((error)=>console.log(error))
 