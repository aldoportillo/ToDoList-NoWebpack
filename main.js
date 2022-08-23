let toDoArr = [];

const titleContent = document.getElementById('title-h2');
const descriptionContent = document.getElementById('description-p');
const dueDateContent = document.getElementById('due-date-p');
const priorityContent = document.getElementById('priority-p');
const checkListContent = document.getElementById('checklist-p')

const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    
    toDoArr.push({Title, Description, DueDate, Priority, CheckList})
    
    console.table(toDoArr);
    return toDoArr // Maybe just return object for DOM Manipulation or return the Arr
}



createToDo("Homework", "To do list", "08/20/22", "low", "false");

createToDo("Work", "Bartend", "Today", "Urgent", "false");

createToDo("Train", "MMA", "Tomorrow", "Top Priority", "false")
 
const form = document.querySelector("form");
const submitFormButton = document.getElementById('s');


submitFormButton.addEventListener('click', () => {
    createToDo(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checklist').value )

    titleContent.textContent = toDoArr[toDoArr.length - 1].Title
    descriptionContent.textContent = toDoArr[toDoArr.length - 1].Description;
    dueDateContent.textContent = toDoArr[toDoArr.length - 1].DueDate;
    priorityContent.textContent = toDoArr[toDoArr.length - 1].Priority;
    checkListContent.textContent = toDoArr[toDoArr.length - 1].CheckList;

    form.reset();
})

