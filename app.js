//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click' , addTodo);

//Funtions
function addTodo(e){
    e.preventDefault();
    console.log('Button-clicked');
    // creating the div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // creating the li 
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Adding Buttons for completed
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i classs="fas fa-check"><i/>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Adding Buttons for trash
    const completedButton = document.createElement('button');
    trashButton.innerHTML = '<i classs="fas fa-trash"><i/>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

}
