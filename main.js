let toDoArr = [];

// const titleContent = document.getElementById('title-h2');
// const descriptionContent = document.getElementById('description-p');
// const dueDateContent = document.getElementById('due-date-p');
// const priorityContent = document.getElementById('priority-p');
// const checkListContent = document.getElementById('checklist-p')

const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    
    toDoArr.push({Title, Description, DueDate, Priority, CheckList})
    
    console.table(toDoArr);
    return toDoArr // Maybe just return object for DOM Manipulation or return the Arr
}



//createToDo("Homework", "To do list", "08/20/22", "low", "false");

//createToDo("Work", "Bartend", "Today", "Urgent", "false");

//createToDo("Train", "MMA", "Tomorrow", "Top Priority", "false")
 
const form = document.querySelector("form");
const submitFormButton = document.getElementById('s');
const cardContainer = document.getElementById("card-container")

const createCard = (arr) => {
    const card = document.createElement('div');
    card.classList.add("card")
    card.classList.add(arr.length)
    card.setAttribute("id", arr.length)
    const close = document.createElement('span');
    close.textContent = "x"
    close.classList.add('close')
    close.addEventListener('click', () => {
        console.log("hello world")
        close.parentElement.remove();
    })
    
    const titleContent = document.createElement('h2');
    const descriptionContent = document.createElement('p');
    const dueDateContent = document.createElement('p');
    const priorityContent = document.createElement('p');
    const checkListContent = document.createElement('p');

    card.append(close, titleContent, descriptionContent, dueDateContent, priorityContent, checkListContent);

    titleContent.textContent = arr[arr.length - 1].Title
    descriptionContent.textContent = arr[arr.length - 1].Description;
    dueDateContent.textContent = arr[arr.length - 1].DueDate;
    priorityContent.textContent = arr[arr.length - 1].Priority;
    checkListContent.textContent = arr[arr.length - 1].CheckList;

    return card
}


submitFormButton.addEventListener('click', () => {
    //createToDo(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checklist').value )

    const newCard = createCard(createToDo(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checklist').value ))

    cardContainer.appendChild(newCard)
    form.reset();
})

