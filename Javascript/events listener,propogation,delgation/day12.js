

// -----------------------------------------------------removelistener---------------------------
const showbtn1 = document.getElementById("btn1");
const showbtn2 = document.getElementById("btn2");
const showbtn3 = document.getElementById("btn3");

const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");

function showassingment() {
    para1.textContent = "your assignment dealidne is approching!";
}
btn1.addEventListener("click", showassingment);

btn2.addEventListener("click", () => {
    para1.textContent = " please check your atttendence status!";
});

btn3.removeEventListener("click", () => {
    btn2.addEventListener("click", () => {
        para1.textContent = " please check your atttendence status!";
    });

    para1.textContent = "your assignment dealidne is approching!";

});

// ---------------------------------------------event bubbling-------------------------------------------------
const parent=document.getElementById("outer");
const child=document.getElementById("inner");

parent.addEventListener("click",()=>
{
    console.log("parent clicked");
    
});
child.addEventListener("click",()=>
{
    console.log("chiid clicked");
});
// --------------------------------------------event capturing-----------------------------------------------
const stip=document.getElementById("capture");
function view()
{
    console.log("veiw btn clicked");
    
}
stip.addEventListener("click", view);
document.getElementById("view").addEventListener("click",view);
// -----------------------------------------------event delegation-------------------------------------




