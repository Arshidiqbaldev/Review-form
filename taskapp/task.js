const tasks = [
    {
        text: "study",
        type: "hard",
        done: false,
    },
    {
        text: "walking",
        type: "medium",
        done: true,
    },
    {
        text: "home work",
        type: "easy",
        done: false,
    },
    {
        text: "running",
        type: "medium",
        done: true,
    },
];


//rander task


function randerTask() {
    const list = document.querySelector(".taskGrid");
    list.innerHTML = "";

    tasks.forEach(function (task, index) {

        const item = document.createElement("div");
        item.classList.add("card");

        if (task.done) {
            item.classList.add("done");

        }

        item.innerHTML = `
                        <input class="changetask" type="checkbox" ${task.done ? "checked" : ""} onchange="toggleTask(${index})">
                        <span class="task-text">${task.text}</span>
                        <span class="${task.type}">${task.type}</span>
                        <button onclick="deleteTask()" class="deleteTask">delete task</button>`;

        list.appendChild(item)

    });



}



// done or not done

function toggleTask(index) {

    tasks[index].done = !tasks[index].done;
    randerTask()

}


// add new task






function addTask() {
    const text = document.getElementById("taskInput").value.trim();
    const type = document.getElementById("taskType").value;
    const error = document.querySelector(".error");

    if (text === "") {
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    tasks.push({
        text: text,
        type: type,
        done: false,

    });

    document.getElementById("taskInput").value = "";
    document.getElementById("btn").classList.add("btn-1");
    setTimeout(() => {
        document.getElementById("btn").classList.remove("btn-1");

    }, 500);


    randerTask()

}


document.querySelector(".addtask").addEventListener("click", addTask);


//delete task

function deleteTask(index) {




    tasks.splice(index, 1);



    randerTask();
}




//rander first fun

randerTask();