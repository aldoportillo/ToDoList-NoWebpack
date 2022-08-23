let toDoArr = [];

const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    
    toDoArr.push({Title, Description, DueDate, Priority, CheckList})
    
    console.table(toDoArr);
    return {Title, Description, DueDate, Priority, CheckList} // Maybe just return object for DOM Manipulation or return the Arr
}



createToDo("Homework", "To do list", "08/20/22", "low", "false");

createToDo("Work", "Bartend", "Today", "Urgent", "false");

createToDo("Train", "MMA", "Tomorrow", "Top Priority", "false")
 
const form = document.querySelector("form");
const submitFormButton = document.getElementById('s');

submitFormButton.addEventListener('click', () => {
    createToDo(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checklist').value )

    form.reset();
})

