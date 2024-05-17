document.addEventListener("DOMContentLoaded", () => {
        const list = document.querySelector('.list ul');
        const forms = document.forms;
        const addform = forms['add-task'];
    })
    // delete task 
list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
})

//Add New Task
addform.addEventListener('submit', (e) => {
    e.preventdefault();
    //Create elemnts 
    const value = addform.querySelector('input[type="text"]').value;
    const li = ocument.createElement('span');
    const taskName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    //Add text content: 
    taskName.textContent = value;
    deleteBtn.textContent = 'X';
    //Add class
    taskName.classList.add('task-name');
    deleteBtn.classList.add('delete');
    //Append child
    li.appendChild(taskName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    addform.reset();
})