// ---------------------question 1-----------------
let course="webdevelopment";
console.log(course);
function course1()
{
    console.log(course);
}
course1();
// ----------------------------------------------

function add()
{
    let branch="AI&DS";
    console.log(branch);
}
add();

// ------------------------------------------
if(true)
{
    let fname="sunny";
    console.log(fname);
}
console.log("name outside block:", typeof fname);

// ------------------question 2----------------
if(true)
{
    var gender="male";
    let age=20;
    const isloogedin="true";
    
    console.log("inside block let variable: ",age);
    console.log("inside block const variable: ",isloogedin);
    
    
}
console.log("surrounding function or outside the block using var variable :",gender);
