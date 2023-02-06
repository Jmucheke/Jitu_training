import MyStreakClass from "./classes/streakClass.js";
let btn_close_form = document.getElementById("btn-close-form");
let btn_open_form = document.getElementById("btn-open-form");
let task_form = document.querySelector(".task-form");
let myname = document.getElementById("taskName");
let myimage = document.getElementById("image");
let date = document.getElementById("date");
const addTask = document.getElementById('btn-add-task');
const form = document.getElementById('myform');
const btn_delete = document.getElementById('btn-deletek');
const displayTask = document.getElementById('display-task');
const errorMessage = document.querySelector('.error-message');
btn_close_form.addEventListener('click', (e) => {
    e.preventDefault();
    task_form.style.display = "none";
    displayTask.style.display = "flex";
});
btn_open_form.addEventListener('click', (e) => {
    e.preventDefault();
    task_form.style.display = "flex";
    displayTask.style.display = "none";
});
let MyStreakClass1 = new MyStreakClass();
let TestArray = [{
        id: 466,
        task: 'Hey',
        image: 'https://images.unsplash.com/photo-1661961110671-77…format&fit=crop&w=500&q=60" name="logo-no-smoking',
        date: '2023-03-03'
    }];
addTask.addEventListener('click', (e) => {
    e.preventDefault();
    let myName = myname.value;
    let myImage = myimage.value;
    let mydate = date.value;
    TestArray.push({ id: 234, task: myName, image: myImage, date: mydate, });
    task_form.style.display = "none";
    displayTask.style.display = "flex";
    taskDisplay();
    // if (myName == '' || myImage == '' || mydate == '') {
    //         const p = document.createElement('p')
    //         p.textContent = 'Please fill in all Fields'
    //         p.style.color = 'red'
    //         p.id = 'error-message'
    //         errorMessage.insertAdjacentElement('afterbegin', p)
    //         setTimeout(() => {
    //                 p.style.display = 'none'
    //         }, 5000)
    // } else {
    //         let Task1 = new myTaskClass(myName, myImage, mydate)
    //         console.log(Task1);
    //         
    //         // 
    //         // form.reset()
    //         
    // }
});
function testDisplay() {
    // modal.style.display = "block";
    console.log("clicked");
}
function taskDisplay() {
    if (TestArray.length == 0) {
        displayTask.innerHTML = " ";
        const p = document.createElement('p');
        p.textContent = 'Wow such Empty, Add Task!!';
        p.style.color = 'black';
        displayTask.insertAdjacentElement('afterbegin', p);
    }
    else {
        displayTask.innerHTML = " ";
        TestArray.forEach(tasks => {
            let html = `
                <div id="myBtn" class="task-1">
                <button onclick="testDisplay()">Details</button>
                        <img src="${tasks.image}"></img>
                        <p>${tasks.date}</p>
                        <p>${tasks.task}</p>
                </div>`;
            displayTask.innerHTML += html;
        });
    }
}
// taskDisplay()
function deleteTask(id) {
    const index = MyStreakClass1.TaskArray.findIndex(tasks => tasks.id === id);
    MyStreakClass1.TaskArray.splice(index, 1);
    taskDisplay();
}
let modalContent = document.querySelector(".modal-content");
// Modal class start
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let openModal = document.getElementById("myBtn");
let closeModal = document.getElementById("btn-close-modal");
// When the user clicks the button, open the modal 
// openModal.onclick = function () {
//         modal.style.display = "block";
//         // console.log("clicked");
// }
closeModal.onclick = function () {
    modal.style.display = "none";
};
// showModal()
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//  if (event.target == modal) {
//   modal.style.display = "none";
//  }
// }
// Modal class end
