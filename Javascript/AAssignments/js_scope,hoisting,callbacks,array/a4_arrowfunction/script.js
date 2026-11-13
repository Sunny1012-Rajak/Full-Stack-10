// ---------------------------question 1--------------------
const welcome=()=>
{
    console.log("welcome to the webdevelopment");
}
welcome();
// -----------
const greet=(name)=>
{
    console.log(name);
}
greet("sunny");
// --------------- explicitly

const add=(a,b)=>
{
    return a+b;
}
let result=add(2,4);
console.log(result);

// --------------------implycitly
const square= number=> number*number;
console.log(square(5));

// --------------------------------------------question 2-----------------

const calculatetotal=(price,quantity)=>
{
    let total=price*quantity;
    console.log(total);
    return total;
}
let store=calculatetotal(300,6);
console.log(store);

// -------------------------

const getmessage=(fname)=>
{
    let message="hello,"+fname;
    console.log(message);
    return message;
}
let answer=getmessage("sunny");
console.log(answer);





