const inputtext = document.getElementById("inputtext");
const addbtn = document.getElementById("addbtn");
const ullist = document.getElementById("ullist")

const tasks = [];

function showtask() {
    ullist.innerHTML = "";

    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerText = task;
        span.classList = "spanstyle";

        const delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        delbtn.className = "btn btn-danger";

        delbtn.addEventListener("click", function () {
            tasks.splice(index,1);
            showtask();
        })
        li.append(span);
        li.append(delbtn);

        ullist.append(li);
    });
    updatecount();
}

function updatecount()
{
    document.querySelector(".totalcount").innerText=tasks.length;
    document.querySelector(".Completecount").innerText=0;
    document.querySelector(".pendingcount").innerText=tasks.length;

    if(tasks.length===0)
    {
        document.getElementById("footer").style.display="block";
    }
    else
    {
        document.getElementById("footer").style.display="none";
    }

}

addbtn.addEventListener("click",function()
{
    const value=inputtext.value.trim();
    if(value==="")
    {
        alert("please enter a task");
        return;
    }
    tasks.push(value);
    inputtext.value="";
    showtask();
})

inputtext.addEventListener("keypress",function(e)
{
    if(e.key==="Enter")
    {
        addbtn.click();
    }
});
showtask();