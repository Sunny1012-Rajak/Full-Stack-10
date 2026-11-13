// -----------------question 1------------
const institute = "NIT Bhopal";
function outer() {
    const course = "cse";
    function inner() {
        const topic = "computer network";
        console.log("topic:" + topic);
        console.log("course:" + course);
        console.log("institue:" + institute);
    }
    inner();
}
console.log("this is the outermost scope:" + institute);
outer();

// inner function can access outer function variable but outer function cannot access inner function variables 
// ,this is called lexical scope

console.log("--------------------------------------------------------");

// -----------------------------question 2--------------------------
const message = "outside";

function outer1() {
    const message = "inside";
    function inner1() {
        console.log(message);
    }
    inner1();
}
outer1();
// display message is inside because the lexical scope fisrt checks inner scope then outer scope and then check outermost scope 
// thats why print "inside"

// ----------------------
function studentdetails()
{
    const name1="sunny";
    const course1="web development";
    function showdetails()
    {
        console.log(name1);
        console.log(course1);
    }
    showdetails();
}
studentdetails();