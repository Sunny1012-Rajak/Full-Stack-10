// -------------question 1-----------------------------
const att = document.getElementById("profileImage");
console.log("before: "+att.getAttribute("src"));


const att1 = att.setAttribute("src", "OIP.jpg");
const att2 = att.setAttribute("alt", "student light");
console.log(att);


att.setAttribute("title", "Student profile photo");
const atr = att.hasAttribute("title");
const atrr = att.hasAttribute("width");
console.log(atr);
console.log(atrr);
console.log("----------------------------------------");

// --------------------question 2-----------------------
const ss = document.getElementById("courseLink");
console.log("before:"+ss.getAttribute("href"));
ss.setAttribute("href", "javascript-course")
console.log(ss);

const pp = document.getElementById("studentName");
console.log("Before: " + pp.hasAttribute("disabled"))
pp.removeAttribute("disabled");
console.log(pp);






