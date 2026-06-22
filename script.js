const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

function addTask() {
  const taskText = input.value.trim();

  if (!taskText) return;

  const li = document.createElement("li");
  li.className = "task-item";

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.type = "button";
  completeBtn.className = "icon-button";
  completeBtn.setAttribute("aria-label", "Mark task complete");
  completeBtn.textContent = "Done";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "icon-button danger";
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.textContent = "Delete";

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(text);
  li.appendChild(actions);
  taskList.appendChild(li);

  input.value = "";
  input.focus();
}

addTaskBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});