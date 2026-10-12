
// ----------------------------hoisting-----------------------------------------------------

// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

function abc() {
    console.log("ricr");
}
abc();

def();
let u = 10, w = 12;
console.log(u + w);

function def() {
    console.log("def ricr");
}

var s = 5;
j = 8;
console.log(s + j);
var j;



// // --------------------------------------Scope----------------------------------------------
let i = 20;
{
    let i = 10;
    {
        let i = 5;
        {
            let i = 1;
            {
                console.log(i);
            }
            console.log(i);
        }
        console.log(i);
    }
    console.log(i);
}
console.log(i);
// ---------------------------------------------------arrow function------------------------
 let greet= ()=>
{
    console.log("hello world");
};
greet();


const great= ()=>
{
    console.log("hello earth");
};
great();

var gret= ()=>
{
    console.log("hello duniya");
};
gret();


// --------------------------------------callback function-----------------------------------

function add(a,b)
{
    let x=a+5;
    let y=b+5;
    console.log(x+y);
}


function sum(m,n,jor)
{
    let p=m*2;
    let q =n*2;

    jor(p,q);
}
sum(5,6,add)