let taskarray = [];

function todolist() {
    let name = document.getElementById("name").value;
    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;
    let datek = document.getElementById("tdate").value;

    taskarray.push({ name: name, task: task, priority: priority, datek: datek });

    // localStorage.setItem(JSON.stringify(taskarray));

    console.log(taskarray);

    let taskList = document.getElementById("tasklist");
    taskList.innerHTML = ""; // Clear the existing tasks before re-rendering

    taskarray.forEach((taskObj, index) => {
        let row = document.createElement("div");
        row.className = "row1 task-item"; // Apply styles for the task row

        row.innerHTML = `
            <div class="name">${taskObj.name}</div>
            <div class="trask">${taskObj.task}</div>
            <div class="priority">${taskObj.priority}</div>
            <div class="date">${taskObj.datek}</div>
            
        `;

        taskList.appendChild(row);
    });
}