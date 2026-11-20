// -----------------question 1------------
const text = document.getElementById("studentMessage");
const res1 = text.textContent = "Welcome to RICR Student Portal!";
console.log(res1);

const res2 = document.getElementById("studentMessage");
res2.textContent = "<strong>Profile Verified</strong>";
console.log(res2);

const res3 = document.getElementById("studentProfile");
res3.innerHTML = `<h2>course details</h2>
                <p>Course: JavaScript</p>`;
console.log(res3);


// -------------question 2----------------
const coursename = "javascript";
const duration = "2 months";
const description = "this is a language for interation";
const course = document.getElementById("courseCard");
course.innerHTML = `<h2>${coursename}</h2>
                <p>Duration:${duration} `;

let desc = document.getElementById("courseDescription");
desc.textContent = description;

let demo = document.getElementById("markupDemo");
demo.textContent = "<strong>JavaScript Training</strong>";
demo.innerHTML = "<strong>JavaScript Training</strong>";








