
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
const clearButtonContainer = document.getElementById('clearButtonContainer');
    addTaskBtn.addEventListener('click', function() {

        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const taskElement = document.createElement('div');
            const taskTextElement = document.createElement('span');
                taskTextElement.textContent = taskText;
                taskElement.appendChild(taskTextElement);
                taskElement.style.display = "flex";
                taskElement.style.alignItems = "center";
                taskElement.style.padding = "16px";
                taskElement.style.border = "1px solid #d1d5db";
                taskElement.style.borderRadius = "10px";
                taskElement.style.backgroundColor = "#f3f4f6";
                taskElement.style.marginBottom = "10px";
                taskElement.style.backgroundImage = "linear-gradient(to right, #fce7f3, #e0e7ff)";
                taskElement.style.cursor="pointer";
                taskElement.style.fontWeight="Bold";
                taskElement.style.color = "#334155";
                taskElement.style.justifyContent = "space-between";
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = " Delete";
            deleteBtn.style.cursor="pointer";
            deleteBtn.style.color = "#7c0404";

            deleteBtn.addEventListener('click', function() {
                taskElement.remove();
            });

            taskElement.appendChild(deleteBtn);
            taskList.appendChild(taskElement);
            taskInput.value = "";
        }

    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });
const clearAllBtn = document.createElement('button');
clearAllBtn.textContent = "Clear All";
    clearAllBtn.style.padding = "10px 20px";
clearAllBtn.style.backgroundImage = "linear-gradient(to right, #994474, #e0e7ff)";
clearAllBtn.style.color = "#fef9f9";
clearAllBtn.style.borderRadius = "8px";
clearAllBtn.style.cursor = "pointer";
clearAllBtn.style.marginBottom = "15px";
clearAllBtn.style.fontWeight= "bold";
clearAllBtn.textContent = "Clear All";

clearAllBtn.addEventListener('click', function() {
    taskList.innerHTML = "";
});
clearButtonContainer.appendChild(clearAllBtn);
});


clearButtonContainer.appendChild(clearAllBtn);