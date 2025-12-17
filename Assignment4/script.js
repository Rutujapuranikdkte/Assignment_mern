let newDiv = document.createElement("div")
function AddList(){
    const todo1 = document.getElementById("todo")
    newDiv.innerHTML = `<div ><label>${todo1.value}</label><button id="btn">Delete</button></div>`;
    newDiv.classList.add("todo-item");
    document.body.appendChild(newDiv)
}