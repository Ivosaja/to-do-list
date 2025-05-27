const inputTask = document.getElementById('taskInput');
const tasksList = document.querySelector('.tasks-list');
let arrayTask = [];
let tasks = '';
let counter = 0;


function showTasks(arrayTasks){
    let tasks = '';
    for(let i = 0; i < arrayTasks.length; i++){
        tasks += ` <li><input type="checkbox" onclick="hightlightAsCompleted(${arrayTasks[i].id})">${arrayTasks[i].content}</li>`;
    };
    tasksList.innerHTML = tasks;
};

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

function hightlightAsCompleted(idCheckbox){
    const itemTask = arrayTask.find(task => idCheckbox === task.id);

}

function deleteTask(){

}


function init(){
    addTask();
}

init();





