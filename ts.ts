let todoInput: HTMLInputElement 
let errorInfo: HTMLBodyElement 
let addBtn: HTMLButtonElement 
let ulList: HTMLElement 
let newTodo: HTMLLIElement  


const facheck = document.querySelector('.fa-check')

const main = () => {
    prepareDOMElemnts()
    prepareDOMEvents()

}
const prepareDOMElemnts = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click',addNewTask)
    ulList.addEventListener('click',checkClick)
    enterAdd()
}
const addNewTask = () => {

    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        createToolsArea()

        todoInput.value = ''
        errorInfo.textContent = ''

    } else {
        errorInfo.textContent = "Wpisz zadanie ... "
    }

}

const createToolsArea = () =>{
    const div = document.createElement('div')
    div.classList.add('tools')
    newTodo.append(div)
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    btn1.classList.add('complete')
    btn1.innerHTML = '<i class="fas fa-check"></i>'
  
    
    btn2.classList.add('delete')
    btn2.innerHTML = '<i class="fas fa-times"></i>'
    div.append(btn1,btn2)
}

const checkClick = (event)=>{
    if(event.target.matches('.complete')){
       event.target.closest('li').classList.toggle('completed')
       event.target.closest('.complete').classList.toggle('completed')
        
    }else if(event.target.matches('.delete')){
        deleteTodo(event)
        console.log(event.target)
    }
    

}

const deleteTodo = (event) =>{
    if(event.target.matches('.delete')){
        event.target.closest('li').remove()
       
    }
}

const enterAdd = () =>{
    todoInput.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
            console.log(e.key)
        if (todoInput.value !== '') {
            newTodo = document.createElement('li')
            newTodo.textContent = todoInput.value
            ulList.append(newTodo)
            createToolsArea()
    
            todoInput.value = ''
            errorInfo.textContent = ''
    
        } else {
            errorInfo.textContent = "Wpisz zadanie ... "
        }
    }
    })
}

document.addEventListener('DOMContentLoaded',main) 