//////////////////////////////
////// GLOBAL VARIABLES //////
const inputTask = document.getElementById('taskInput');
const tasksList = document.querySelector('.tasks-list');
const binTrash = document.getElementById('btn-binTrash');
const counterTasks = document.getElementById('counter-tasks')
let arrayTask = [];
let tasks = '';
let counter = 0;

///////////////////////////////////
////// Function to show tasks /////
function showTasks(arrayTasks){
    let tasks = '';
    if(arrayTasks.length === 0){
        tasks += `<p id="info-tasks">No hay tareas pendientes</p>`
    }
    else{
        for(let i = 0; i < arrayTasks.length; i++){
            if(arrayTasks[i].completed){
                tasks += `  <li>
                                <div class="container-info-item">
                                    <input type="checkbox" checked onclick="hightlightAsCompleted(event, ${arrayTasks[i].id})">
                                    <span class="task-content" style="text-decoration:line-through;color:gray">${arrayTasks[i].content}</span>
                                </div>
                                <div class="container-icon">
                                    <i class="fa-solid fa-xmark" onclick="deleteTask(${arrayTasks[i].id})"></i>
                                </div>
                            </li>`;
            }else{
                tasks += `  <li>
                                <div class="container-info-item">
                                    <input type="checkbox" onclick="hightlightAsCompleted(event, ${arrayTasks[i].id})">
                                    <span class="task-content">${arrayTasks[i].content}</span>
                                </div>
                                <div class="container-icon">
                                    <i class="fa-solid fa-xmark" onclick="deleteTask(${arrayTasks[i].id})"></i>
                                </div>
                            </li>`;
            }
        };
    }
    tasksList.innerHTML = tasks;
    showAmountOfTasks();
};

///////////////////////////////////////////////////////
////// Function to add a task to the to-do list ///////
function addTask(){
    inputTask.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            // TODO: Validate if the input value is an empty string
            arrayTask.push({id: counter + 1, content: inputTask.value, completed:false});
            counter ++;
            inputTask.value = '';
            localStorage.setItem('counter', counter);
            localStorage.setItem('tasks', JSON.stringify(arrayTask));
            showTasks(arrayTask);
        };
    });
};

/////////////////////////////////////////////////////
//////// Function to mark a task as completed ///////
function hightlightAsCompleted(event, id){
    const newTask = arrayTask.find(task => task.id === id);
    const inputCheckbox = event.target; // the element who throw the event (the input)
    let itemTask = inputCheckbox.parentElement; // the parent element of the element who throw the event (the li)
    const taskContent = itemTask.querySelector('.task-content');
    if(inputCheckbox.checked){
        taskContent.style.textDecoration = 'line-through';
        taskContent.style.color = 'gray';
        newTask.completed = true;
    }else{
        taskContent.style.textDecoration = 'none';
        taskContent.style.color = 'black';
        newTask.completed = false;
    };
    localStorage.setItem('tasks', JSON.stringify(arrayTask));
}

//////////////////////////////////////////////////////////////
//////// Function to delete a task from the to-do list ///////
function deleteTask(id){
    const indexTaskDeleted = arrayTask.findIndex(task => id === task.id);
    arrayTask.splice(indexTaskDeleted,1);
    localStorage.setItem('tasks', JSON.stringify(arrayTask));
    showTasks(arrayTask);
};

////////////////////////////////////////////
///// Function to delete all the tasks /////
function deleteAllTasks(){
    binTrash.addEventListener('click', () =>{
        arrayTask = [];
        counter = 0;
        localStorage.clear();
        showTasks(arrayTask);
    })
};

/////////////////////////////////////////////////////////////////////
////////// Function to see the amount of tasks in the list //////////
function showAmountOfTasks(){
    counterTasks.textContent = arrayTask.length;
}

/////////////////////////////////////////////////
//// Function to initialize some functions //////
function init(){
    if(localStorage.getItem('tasks')){
        arrayTask = JSON.parse(localStorage.getItem('tasks'));
    }
    if(localStorage.getItem('counter')){
        counter = parseInt(localStorage.getItem('counter'));
    }
    showTasks(arrayTask);
    addTask();
    deleteAllTasks();
};

init();





