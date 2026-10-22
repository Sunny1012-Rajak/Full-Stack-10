function addtask() {
    const newtask = document.getElementById("input").value.trim();
    const LI = document.createElement("li");
    LI.classList.add("p-3");

    const SPAN = document.createComment("span");
    SPAN.textContent = newtask;

    const BUTTON = document.createElement("button");
     BUTTON.classList.add("btn","btn-danger","btn-sm","ms-3");
    BUTTON.textContent = "Delete";
    BUTTON.onclick = () => LI.remove();
    LI.appendChild(SPAN);
    LI.appendChild(BUTTON);

    document.getElementById("tasklist").appendChild(LI);

    document.getElementById("input").value = "";
}