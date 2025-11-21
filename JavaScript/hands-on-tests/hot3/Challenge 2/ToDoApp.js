let toDoList = ["Pushups", "Cook", "Get groceries", "Feed Dogs", "Sleep"];

document.getElementById('submit').addEventListener('click', function(){

  let newTask = document.getElementById('task-input').value;
  
  toDoList.push(newTask);

  const listItem = document.createElement("li");

  if (newTask === "") {
    document.getElementById('help').innerText = "Please Type Something."
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
    });
  } 
  
  else if (newTask !== toString){
    document.getElementById('help').innerText = "Please Type Words."
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
    });
  } 
  
  else {
    for (i=0; i < toDoList.length; i++) {
    listItem.textContent = toDoList[i];
    document.getElementById('list').append(listItem);
    document.getElementById('help').innerText = ""
    }
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
    });
  }
});
