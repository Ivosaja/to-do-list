//////////////////////////////
////// GLOBAL VARIABLES //////
const inputTask = document.getElementById('taskInput');
const tasksList = document.querySelector('.tasks-list');
const binTrash = document.getElementById('btn-binTrash');
let arrayTask = [];
let tasks = '';
let counter = 0;

///////////////////////////////////
////// Function to show tasks /////
function showTasks(arrayTasks){
    let tasks = '';
    for(let i = 0; i < arrayTasks.length; i++){
        if(arrayTasks[i].completed){
            tasks += `  <li style="text-decoration:line-through;">
                            <input type="checkbox" checked onclick="hightlightAsCompleted(event, ${arrayTasks[i].id})">
                            <span class="task-content">${arrayTasks[i].content}</span>
                            <i class="fa-solid fa-xmark" onclick="deleteTask(${arrayTasks[i].id})"></i>
                        </li>`;
        }else{
            tasks += `  <li>
                            <input type="checkbox" onclick="hightlightAsCompleted(event, ${arrayTasks[i].id})">
                            <span class="task-content">${arrayTasks[i].content}</span>
                            <i class="fa-solid fa-xmark" onclick="deleteTask(${arrayTasks[i].id})"></i>
                        </li>`;
        }
    };
    tasksList.innerHTML = tasks;
};

///////////////////////////////////////////////////////
////// Function to add a task to the to-do list ///////
function addTask(){
    inputTask.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            arrayTask.push({id: counter + 1, content: inputTask.value, completed:false});
            counter ++;
            inputTask.value = '';
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
}

//////////////////////////////////////////////////////////////
//////// Function to delete a task from the to-do list ///////
function deleteTask(id){
    const indexTaskDeleted = arrayTask.findIndex(task => id === task.id);
    arrayTask.splice(indexTaskDeleted,1);
    showTasks(arrayTask);
    console.log(arrayTask);
};

////////////////////////////////////////////
///// Function to delete all the tasks /////
function deleteAllTasks(){
    binTrash.addEventListener('click', () =>{
        arrayTask = [];
        showTasks(arrayTask);
    })
};


/////////////////////////////////////////////////
//// Function to initialize some functions //////
function init(){
    addTask();
    deleteAllTasks();
};

init();





