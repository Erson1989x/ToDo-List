const inputField = document.getElementById(`input-field`);
const listContainer = document.querySelector(`.list-container`);
const addButton = document.querySelector(`.add-button`);
const taskCount = document.querySelector(`.task-count`);
const completedButton = document.querySelector(`.filter-completed`);
const allButton = document.querySelector(`.filter-all`);
const activeButton = document.querySelector(`.filter-active`);
const clearButton = document.querySelector(`.clear-completed`);

//numere de taskuri

const updateTaskCount = () =>{
    const tasks = listContainer.children;
    let taskCountValue = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].classList.contains(`list-checked`)) {
            taskCountValue++;
        }
    }
    taskCount.textContent = `${taskCountValue} tasks left`;
}

const addBtn = () => {
    if (inputField.value === ``) {
        alert(`You must write something !`);
    } else {
        const newToDoContainer = document.createElement(`li`);

        const taskDiv = document.createElement(`div`);
        taskDiv.textContent = inputField.value;
        taskDiv.className = `task-text`;
        
        const delButton = document.createElement(`button`);
        delButton.textContent = `Del`;
        delButton.className = `del-button`;
        delButton.addEventListener(`click`, function(e){
            e.target.parentNode.classList.toggle(`list-checked`);
            updateTaskCount();
        });
        newToDoContainer.appendChild(taskDiv);
        newToDoContainer.appendChild(delButton);
        listContainer.appendChild(newToDoContainer);
        updateTaskCount();
        }
    inputField.value = ``;
}

//completed button

const showCompletedTasks = () => {
    const tasks = listContainer.children;

    for ( let i = 0; i < tasks.length; i++) {
        if(!tasks[i].classList.contains(`list-checked`)) {
            tasks[i].style.display = `none`
        } else {
            tasks[i].style.display = `flex`;
            tasks[i].style.justifyContent = 'space-between';
        }
    }
}

//all button

const showAllTasks = () => {
    const tasks = listContainer.children;

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display = `flex`;
        tasks[i].style.justifyContent = 'space-between';
    }
}

//active button

const showActiveTasks = () => {
    const tasks = listContainer.children;

    for ( let i = 0; i < tasks.length; i++) {
        if(tasks[i].classList.contains(`list-checked`)) {
            tasks[i].style.display = `none`
        } else {
            tasks[i].style.display = `flex`;
            tasks[i].style.justifyContent = 'space-between';
        }
       }
}


// clear completed tasks

const clearCompletedTasks = () => {
    const tasks = listContainer.children;

    for ( let i = 0; i < tasks.length; i++) {
        if (!tasks[i].classList.contains(`.list-checked`)) {
            listContainer.removeChild(tasks[i]);
        }
    }
}





addButton.addEventListener(`click`, addBtn);
completedButton.addEventListener(`click`, showCompletedTasks);
allButton.addEventListener(`click`, showAllTasks);
activeButton.addEventListener('click', showActiveTasks); 
clearButton.addEventListener(`click`, clearCompletedTasks);