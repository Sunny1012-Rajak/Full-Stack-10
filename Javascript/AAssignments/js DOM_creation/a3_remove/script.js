// ------------------question 1-------------->
const container=document.getElementById("classAnnouncement");
const btn=document.getElementById("removeAnnouncement");
btn.addEventListener("click",function()
{
    container.remove();
});

// ---------------question 2--------------->
const desp=document.getElementById("courseDescription");
const bttn=document.getElementById("removeDescription");
desp.addEventListener("click",function()
{
    desp.remove();
})
