const A = document.getElementById('task-area');
const B = document.getElementById('single-task');
const C = document.getElementById('tasks');

//Add a new task to do list 

function addTask(event)  {
    event.preventDefault();
    if (B.value ==='')return;
    const task = createTask(B.value);
    C.appendChild(task);
    B.value ='';
}

//Create a new task element

function createTask(taskName) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML=`
     <input type="checkbox">
        <label>${taskName}</label>
        <span class="delete">&times;</span>
        `;
       
        //Add a delete button

        const deleteButton = task.querySelector('.delete');
        deleteButton.addEventListener('click',deleteTask);

        return task;

}

//Delete a task from the list

function deleteTask(event) {
    event.target.parentElement.remove();
}

A.addEventListener('submit',addTask);