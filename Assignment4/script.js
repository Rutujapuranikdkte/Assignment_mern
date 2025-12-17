function addToDo() {
    let input = document.getElementById("toolInput").value;
    let msg = document.getElementById("msg");

    if (input === "") {
        msg.innerHTML = "Please enter todo";
        return false;
    }

    // Create new list item
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = input;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "delete";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("todoList").appendChild(li);

    // Clear input box
    document.getElementById("toolInput").value = "";
    msg.innerHTML = ""; // remove error message
}
