let titles = []
let descs = []
let dates = []

function display_title(){
 let e = titles.map(title=> `${title}<br>`)
 document.querySelector('h2').innerHTML = e
 // console.log(e);
 let i = descs.map(desc=> `${desc}<br>`)
 document.getElementById('viewdesc').innerHTML = i
 let j = dates.map(date=> `${date}<br>`)
 document.getElementById('viewdate').innerHTML = j
}

// display_users()

const btnAdd=document.querySelector('button')
const inputTitle=document.getElementById('title')
const inputDesc=document.getElementById('desc')
const inputDate=document.getElementById('date')


btnAdd.addEventListener('click',()=>{
 titles.push(inputTitle.value);
 inputTitle.value=''
 descs.push(inputDesc.value);
 inputDesc.value=''
 dates.push(inputDate.value);
 inputDate.value=''
 display_title()
})

