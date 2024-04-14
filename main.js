function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  var li = document.createElement("li");
  var taskText = document.createTextNode(taskInput.value);
  li.appendChild(taskText);

  taskList.appendChild(li);

  taskInput.value = "";
}
