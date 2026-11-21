// ---------practice---------------------
const message = document.getElementById("message");
message.classList.add("addd");
message.classList.add("highlight");


// ------------question 1---------------
const cls = document.getElementById("welcomeMessage");
cls.classList.add("highlight", "important");
console.log(cls.classList.contains("highlight"));
console.log(cls.classList.contains("important"));
cls.classList.remove("highlight");


cls.style.backgroundColor = "lightyellow";
cls.style.color = 'darkgreen';
cls.style.padding = "10px";
cls.style.fontWeight = "bold";
cls.style.border = "2px solid orange";

// ------------------------question 2-----------
const btn = document.getElementById("checkButton");
const msg=document.getElementById("assignmentNotice");
btn.classList.add("highlight");
btn.classList.contains("checkButton");
btn.addEventListener("click", function () {

    msg.classList.toggle("highlight");
});

btn.style.backgroundColor="lightyellow";
btn.style.color = "darkred";
btn.style.padding = "10px";
btn.style.fontWeight = "bold";

