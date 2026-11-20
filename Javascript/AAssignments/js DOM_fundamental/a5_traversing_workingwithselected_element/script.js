// -------------question 1-----------
/*
const head = document.querySelector("h2");
const a = head.parentElement;
console.log(a);
const a1 = a.children.length;
console.log(a1);

const div=document.querySelector("div")
const a2=div.firstElementChild;
console.log(a2.textContent);
const a3=div.lastElementChild;
console.log(a3.textContent);


const head1=head.nextElementSibling;
head1.textContent="Course status: Enrollment Open";
console.log("updated para: "+head1.textContent);

const head2=head1.nextElementSibling;
console.log("its lastelementsibiling: "+head2.textContent);
*/

// --------------------question 2--------------------
const para=document.querySelector("p");
 const befor=para.previousElementSibling;
console.log(befor.textContent);

const after=para.nextElementSibling;
after.textContent="Progress: 25%";
console.log(after.textContent);

const parent=para.parentElement;
console.log(parent);
console.log(" no. of childs of div: "+ parent.children.length);

para.textContent="Status: In Progress";
console.log(para.textContent);








