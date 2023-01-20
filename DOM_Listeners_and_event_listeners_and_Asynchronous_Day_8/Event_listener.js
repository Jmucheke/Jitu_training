let users = []

function display_users(){
 let e = users.map(user=> `${user}<br>`).join("\n")
 document.querySelector('p').innerHTML = e
}

display_users()

const btnAdd=document.querySelector('button')
const inputUsers=document.querySelector('input')

btnAdd.addEventListener('click',()=>{
 users.push(inputUsers.value);
 inputUsers.value=''
 display_users()
})

btnAdd.addEventListener('keyup',(event)=>{
 if(event.KeyCode === 13){
  event.preventDefault()
  document.querySelector(button).click()
 }
})
