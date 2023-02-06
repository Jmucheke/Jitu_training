const title = document.getElementById('title')! as HTMLInputElement
const desc = document.getElementById('desc')! as HTMLInputElement
const date = document.getElementById('date')! as HTMLInputElement
const btn = document.getElementById('create-btn')! as HTMLInputElement
const content = document.querySelector('.content-1')! as HTMLDivElement
const uncompleted = document.querySelector('.completed')! as HTMLDivElement



interface Todo{
 id:number
 Title:string
 Description:string
 Date:string
 Completed:boolean
}

let updating:number=-1

const Todos: Todo[] = [{
 id:123,
 Title:"Todo1",
 Description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
 Date:'20/01/2023',
 Completed:false
}]

function checkbtn(){
 if (updating != -1) {
  btn.textContent = 'Update'
 } else {
  btn.textContent = 'Create Todo'
 }
}
btn.addEventListener('click', addorupdate)

function addorupdate(){
 if(updating >=0){
  let todo = Todos[updating]


  const Title = title.value
  const Description = desc.value
  const Date = date.value

  Todos[updating] = { ...todo, Title, Date, Description }
  showtodos()
  updating = -1
  checkbtn()

  title.value = ''
  desc.value = ''
  date.value = ''
 } else {
  const Title = title.value
  const Description = desc.value
  const Date = date.value

  if (Title == '' || Description == '' || Date == '') {
   const p = document.createElement('p')
   p.textContent = 'Please fill in all Fields'
   p.style.color = 'red'
   p.id = 'error-message'
   content.insertAdjacentElement('afterbegin', p)

   setTimeout(() => {
    p.style.display = 'none'
   }, 4000)
  } else {
   let singleTodo: Todo = { Title, Description, Date, Completed: false, id: Math.random() * 10000 }
   Todos.push(singleTodo)
   showtodos()

   console.log(Todos);
  }

 }
}

function showtodos(){
 const todos:Todo[]=Todos.filter(todo=>todo.Completed===false)
 if(todos.length==0){
  uncompleted.innerHTML = ''
  const p = document.createElement('p')
  p.textContent = 'Wow such Empty, Add Todo!!'
  p.style.color = 'black'
  uncompleted.insertAdjacentElement('afterbegin', p)
  
 }else{
  uncompleted.innerHTML=''
  todos.forEach((todo)=>{
   let html=`
   <div class="todo" >
    <h1>${todo.Title}</h1>
    <p>${todo.Description}</p>   
    <div class="btn">
     <button onclick="updateTodo(${todo.id})">Update</button>
     <button onclick="deleteTodo(${todo.id})">Delete</button>
     <button onclick="()">Delete</button>
     <button>Complete</button>
    </div>
   `
   
   uncompleted.innerHTML += html
  })
 }
 

}
showtodos()

function dummy(){
 console.log("");
 
}

function deleteTodo(id:number){
 const index = Todos.findIndex(todo=>todo.id===id)
 Todos.splice(index,1)
 showtodos()
}

function updateTodo(id:number){
 const index = Todos.findIndex(todo=>todo.id===id)
 let todo=Todos[index]

 title.value=todo.Title
 desc.value=todo.Description
 date.value = todo.Date
 updating = index
 checkbtn()
}

// let complete = (id) => {
//  let todo = toDos.find(todo => todo.id === id)
//  if (todo.completed) {
//   todo.completed = false
//   console.log(todo)
//   displayToDo()
//  } else {
//   todo.completed = true
//   console.log(todo)
//   showcomplete()
//  }
// }