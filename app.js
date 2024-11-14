
let inputBox = document.getElementById("input-box");
let todoLista = document.getElementById("todo-lista");
let button = document.getElementById("submit-button");

// Array för att hålla varor

let arrayOfTasks = [];

 // Lägg till function för button
  button.onclick = function () {
    if(inputBox.value !== "") { 
      let task = inputBox.value; // Lägger till varor
   arrayOfTasks.push(task);  // Lägg till varar i array
   inputBox.value = ""; // Rensa input-fältet
   displayTasks(); // Visa uppdaterad lista
   addDataToLocalStorage(arrayOfTasks);  //Spara i localStorage     
 }
};

// Function för att visa varor på skärmen 
function displayTasks() {
   todoLista.innerHTML = ""; // Rensa listan först
   arrayOfTasks.forEach((taskText, index) => {    //Lopping för array
    let li = document.createElement('li');
    li.className = 'task';
    li.innerHTML =`${taskText}`;
  
  
  // Lägga till ta bort knapp
  let deleteButton = document.createElement('button');
  deleteButton.textContent = ("Ta Bort")
  deleteButton.onclick = function() {
    removeTask(index);
  };

  li.appendChild(deleteButton);
  todoLista.appendChild(li);
 });
}

// Function för att to bort en vara från listan 
function removeTask(index) {
  arrayOfTasks.splice(index, 1); // To bort varan från arryen
  displayTasks();  // Uppdatera listan
  addDataToLocalStorage(arrayOfTasks); // Uppdatera localStorage
} 

// Spara varor i localStorage 
function addDataToLocalStorage(tasks) {
  window.localStorage.setItem("task", JSON.stringify(tasks));
}
 
// Ladd varor från localStorage vid start
window.onload = function() {
let storedTasks = JSON.parse(window.localStorage.getItem("task"));
if (Array.isArray(storedTasks)) {
  arrayOfTasks = storedTasks;
  displayTasks(); // Visa varor
 }
}

// Function för att rensa hela listan
function del() {
  arrayOfTasks = [];
  displayTasks();
  addDataToLocalStorage(arrayOfTasks);
}
 
