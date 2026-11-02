const data= {
        name: "sumit",
        branch: "aids",
        rollno: 55,
        project:"lms",
    };

const ready=JSON.stringify(data);
localStorage.setItem("mynewdata",ready);
localStorage.setItem("myname","sunny");
localStorage.setItem("yourname","mahi");

const geting=localStorage.getItem("mynewdata");


document
.querySelector("body")
.appendChild((document.createElement("div").innerText=geting));