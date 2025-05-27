////////////////////////
/// GLOBAL VARIABLES ///
const inputTask = document.getElementById('taskInput');
const tasksList = document.querySelector('.tasks-list');
let arrayTask = [];
let tasks = '';
let counter = 0;

///////////////////////////////////
////// Function to show tasks /////
function showTasks(arrayTasks){
    let tasks = '';
    for(let i = 0; i < arrayTasks.length; i++){
        tasks += ` <li><input type="checkbox" onclick="hightlightAsCompleted(${arrayTasks[i].id})">${arrayTasks[i].content}</li>`;
    };
    tasksList.innerHTML = tasks;
};

///////////////////////////////////////////////////////
////// Function to add a task to the to-do list ///////
function addTask(){
    inputTask.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            arrayTask.push({id: counter + 1, content: inputTask.value});
            inputTask.value = '';
            console.log(arrayTask);
            showTasks(arrayTask);
        };
    });
    
};

/////////////////////////////////////////////////////
//////// Function to mark a task as completed ///////
function hightlightAsCompleted(idCheckbox){
    // TODO : Finish the highlight function to mark a task as completed
    const itemTask = arrayTask.find(task => idCheckbox === task.id);

}

//////////////////////////////////////////////////////////////
//////// Function to delete a task from the to-do list ///////
function deleteTask(){
    // TODO: Finish the delete function to delete whatever task you want
}

/////////////////////////////////////////////////
//// Function to initialize some functions //////
function init(){
    addTask();
}

init();





