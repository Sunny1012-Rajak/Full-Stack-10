const headingtxt = document.getElementById("heading");
const paratxt = document.getElementById("message");
const btntxt = document.getElementById("btn");

console.log(headingtxt.innerHTML);
console.log(paratxt.innerText);
console.log(btntxt.textContent);


function updatename() {
    const name = document.getElementById("name").value.trim();
    paratxt.innerText = "this is web dv class !" + name;
}

// ----------------

const pic = document.getElementById("imgs");
// pic.src = "./img-grid-2.jpg";
// pic.alt = "chair2";

// -----------------------------
function change() {
    const inputs = document.getElementById("name");

    inputs.id = "fullname";
    inputs.type = "password";
    pic.setAttribute("src","./img-grid-2.jpg");
    pic.setAttribute("alt","chair2");
}
// /--------------------------------------------------
function bbON()
{
    const b1=document.getElementById(bulb1);
    // b1.classList.add("b1");
    b1.classList.add
    // b1.style.backgroundColor = "red";
}