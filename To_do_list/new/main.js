
let form = document.querySelector('form')
let toDoContainer = document.querySelector('.to-do-container')
let allToDo = document.querySelector('#all-to-do')
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


} else {
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

    toDos.push(toDo)
    displayToDo()
})

const displayToDo = () => {

    if (toDos.length > 0) {
        form.style.display = 'none'
        toDoContainer.style.display = 'flex'
        headingEmpty.style.display = 'none'
        toDoContainer.innerHTML = ''
        toDos.forEach(todo => {

            toDoContainer.innerHTML +=
                `<h2>${todo.title}</h2>
                <p>${todo.description}</p>
            <button onclick="complete(id)">Complete</button>
            `
        })


    } else {
        form.style.display = 'none'
        toDoContainer.style.display = 'none'
        headingEmpty.style.display = 'block'

    }

}


allToDo.addEventListener('click', () => {
    displayToDo()
})
addToDo.addEventListener('click', (e) => {

    form.style.display = 'flex'
    toDoContainer.style.display = 'none'
    headingEmpty.style.display = 'none'

})

completed.addEventListener('click', () => {
    if (toDos.some(todo => todo.completed === true)) {
        form.style.display = 'none'
        toDoContainer.style.display = 'flex'
        headingEmpty.style.display = 'none'
        toDoContainer.innerHTML = ''
        toDos.filter(todo => todo.completed === true).forEach(todo => {

            toDoContainer.innerHTML +=
                `<h2>${todo.title}</h2>
                <p>${todo.description}</p>
            <button onclick="complete(id)">Complete</button>
            `
        })

    } else {
        form.style.display = 'none'
        toDoContainer.style.display = 'none'
        headingEmpty.style.display = 'block'
        headingEmpty.innerText = "No completed to do"
    }
})
incomplete.addEventListener('click', () => {
    if (toDos.some(todo => todo.completed === false)) {
        form.style.display = 'none'
        toDoContainer.style.display = 'flex'
        headingEmpty.style.display = 'none'
        toDoContainer.innerHTML = ''
        toDos.filter(todo => todo.completed === false).forEach(todo => {

            toDoContainer.innerHTML +=
                `<h2>${todo.title}</h2>
            <button onclick="complete(id)">Complete</button>
            `
        })


    } else {

        form.style.display = 'none'
        toDoContainer.style.display = 'none'
        headingEmpty.style.display = 'block'
        headingEmpty.innerText = "No incomplete to do"
    }
})


const complete = (id) => {

    todo = toDos.filter(todo => todo.id === id)
    console.log(todo)
    todo.DateCompleted = new Date()
    todo.completed = true
    displayToDo()

}


const showcomplete = () => {
    
    if(toDos.some(todo=>todo.completed === true)){
        toDoContainer.innerHTML = ''
        toDos.forEach(todo => {
            if(todo.completed){
                form.style.display = 'none'
                toDoContainer.style.display = 'flex'
                headingEmpty.style.display = 'none'
                toDoContainer.innerHTML +=
                    `<h2>${todo.title}</h2>
            <button onclick="complete(id)">Complete</button>
            `
            }
    
    
        })
    }
}