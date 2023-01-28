
let form = document.querySelector('form')
let toDoContainer = document.querySelector('.to-do-container')
let allToDo = document.querySelector('#all-to-do')
let editForm = document.querySelector('#editForm');
let addToDo = document.querySelector("#add-to-do")
let completed = document.querySelector("#completed")
let incomplete = document.querySelector('#incomplete')
let headingEmpty = document.querySelector('h2')
let toDos = []


const generateId = () => {

    return Math.floor(Math.random() * 1000)
}

if (toDos.length > 0) {
    form.style.display = 'none'
    toDoContainer.style.display = 'flex'
    headingEmpty.style.display = 'none'
    editForm.style.display = 'none';



} else {
    editForm.style.display = 'none';
    form.style.display = 'none'
    toDoContainer.style.display = 'none'
    headingEmpty.style.display = 'block'

}

form.addEventListener('submit', (e) => {

    e.preventDefault()
    let title = form.title.value
    let description = form.description.value
    let date = form.date.value

    let toDo = {
        id: generateId(),
        title,
        description,
        date,
        completed: false,
        DateCompleted: null
    }
    form.reset()

    toDos.push(toDo)
    displayToDo()
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault();


    let title = editForm.title.value;
    let description = editForm.description.value;
    let date = editForm.date.value;
    let id = editForm.id.value;

    id = Number(id);
    // console.log(id);
    let todo = toDos.find((todo) => todo.id === id);
    // console.log(todo);
    todo.id = id;
    todo.title = title;
    todo.description = description;
    todo.date = date;
    todo.completed = false
    // console.log(editForm);
    editForm.reset()
    displayToDo()
});

const displayToDo = () => {

    if (toDos.length > 0) {
        form.style.display = 'none'
        toDoContainer.style.display = 'flex'
        headingEmpty.style.display = 'none'
        editForm.style.display = 'none';

        toDoContainer.innerHTML = ''
        toDos.forEach(todo => {

            toDoContainer.innerHTML +=
                `<h2>${todo.title}</h2>
                <p>${todo.description}</p>
                <p>${todo.date}</p>
                <button onClick="updateTask(${todo.id})" class='taskEdit'><ion-icon name="create"></ion-icon></button>
            <button onclick="complete(${todo.id})">Complete</button>
            <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
            `
        })


    } else {
        form.style.display = 'none'
        editForm.style.display = 'none';

        toDoContainer.style.display = 'none'
        headingEmpty.style.display = 'block'

    }

}
const showcomplete = () => {

    if (toDos.some(todo => todo.completed === true)) {
        toDoContainer.innerHTML = ''
        toDos.forEach(todo => {
            if (todo.completed) {
                form.style.display = 'none'
                toDoContainer.style.display = 'flex'
                editForm.style.display = 'none';
                headingEmpty.style.display = 'none'
                toDoContainer.innerHTML +=
                    `<h2>${todo.title}</h2>
                <p>${todo.description}</p>
                <p>${todo.date}</p>
                <button onClick="updateTask(${todo.id})" class='taskEdit'><ion-icon name="create"></ion-icon></button>
            <button onclick="complete(${todo.id})">Complete</button>
            <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
            `
            }


        })
    }
}
// Delete
function deleteTask(id) {
    toDos = toDos.filter((todo) => todo.id !== id);
    // console.log(toDos);
    displayToDo();
    showcomplete()

}

// Update

let updateTask = (id) => {
    editForm.style.display = 'flex';
    form.style.display = 'none'
    toDoContainer.style.display = 'none'
    headingEmpty.style.display = 'none'
    let todo = toDos.find((todo) => todo.id == id);
    editForm.title.value = todo.title;
    editForm.description.value = todo.description;
    editForm.date.value = todo.date;
    editForm.id.value = todo.id;
    editForm.style.display = 'flex';
    form.style.visbility = 'visible';
};

// allToDo.addEventListener('click', () => {
//     if (toDos.some(todo => todo.completed === false)) {
//         form.style.display = 'none'
//         toDoContainer.style.display = 'flex'
//         headingEmpty.style.display = 'none'
//         toDoContainer.innerHTML = ''
//         toDos.filter(todo => todo.completed === false).forEach(todo => {

//             toDoContainer.innerHTML +=
//             `<h2>${todo.title}</h2>
//                 <p>${todo.description}</p>
//                 <p>${todo.date}</p>
//             <button onclick="complete(${todo.id})">Complete</button>
//             `
//         })


//     } else {

//         form.style.display = 'none'
//         toDoContainer.style.display = 'none'
//         headingEmpty.style.display = 'block'
//         headingEmpty.innerText = "Wow soo Empty!"
//     }
// })

addToDo.addEventListener('click', (e) => {

    form.style.display = 'flex'
    toDoContainer.style.display = 'none'
    headingEmpty.style.display = 'none'
    editForm.style.display = 'none';


})

completed.addEventListener('click', () => {
    if (toDos.some(todo => todo.completed === true)) {
        form.style.display = 'none'
        toDoContainer.style.display = 'flex'
        editForm.style.display = 'none';
        headingEmpty.style.display = 'none'
        toDoContainer.innerHTML = ''
        toDos.filter(todo => todo.completed === true).forEach(todo => {

            toDoContainer.innerHTML +=
                `<h2>${todo.title}</h2>
                <p>${todo.description}</p>
                <p>${todo.date}</p>
                <button onClick="updateTask(${todo.id})" class='taskEdit'><ion-icon name="create"></ion-icon></button>
            <button onclick="complete(${todo.id})">Complete</button>
            <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
            `
        })

    } else {
        form.style.display = 'none'
        toDoContainer.style.display = 'none'
        editForm.style.display = 'none';

        headingEmpty.style.display = 'block'
        headingEmpty.innerText = "No completed Todo"
    }
})
incomplete.addEventListener('click', () => {
    if (toDos.some(todo => todo.completed === false)) {
        form.style.display = 'none'
        toDoContainer.style.display = 'flex'
        editForm.style.display = 'none';

        headingEmpty.style.display = 'none'
        toDoContainer.innerHTML = ''
        toDos.filter(todo => todo.completed === false).forEach(todo => {

            toDoContainer.innerHTML +=
                `<h2>${todo.title}</h2>
                <p>${todo.description}</p>
                <p>${todo.date}</p>
                <button onClick="updateTask(${todo.id})" class='taskEdit'><ion-icon name="create"></ion-icon></button>
            <button onclick="complete(${todo.id})">Complete</button>
            <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
            `
        })


    } else {

        form.style.display = 'none'
        editForm.style.display = 'none';

        toDoContainer.style.display = 'none'
        headingEmpty.style.display = 'block'
        headingEmpty.innerText = "No incomplete Todo"
    }
})


// const complete = (id) => {

//     let todo = toDos.find(todo => todo.id === id)
//     // console.log(todo)
//     todo.DateCompleted = new Date()
//     todo.completed = true
//     // displayToDo()
//     showcomplete()

// }
let complete = (id) => {
    let todo = toDos.find(todo => todo.id === id)
    if (todo.completed) {
        todo.completed = false
        console.log(todo)
        displayToDo()
    } else {
        todo.completed = true
        console.log(todo)
        showcomplete()
    }
}

