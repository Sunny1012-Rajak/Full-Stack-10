// ---------------------question 1------------
const container=document.getElementById("courseContainer");
const head=document.createElement("h2");
head.textContent="Full Stack Web Development";
 const para=document.createElement("p");
 para.textContent="Learn frontend and backend development step by step.";
const apara=document.createElement("p");
apara.textContent="Duration: 6 Months";

container.append(head);
 container.append(para);
container.append(apara);
// -------------------question 2-------
const container1=document.getElementById("resourceContaine");
const h3=document.createElement("h3");
h3.textContent="Student Learning Resources";
const anchor =document.createElement("a");
anchor.textContent="Open Course Materials";
anchor.setAttribute("href","materials.html");
const btn=document.createElement("button");
btn.textContent="Start Learning";

container1.append(h3);
container1.append(anchor);
container1.append(btn);