// ------------------question 1------------------
function greet(name="guest")
{
    console.log("hello",name);
}
greet();
greet("sunny");

function shownumber(number=10)
{
    console.log("number=",number);
}
shownumber();
shownumber(20);

// -------------------------question 2---------------

function add(a=10 ,b=5)
{
    return a+b;
}
let add1=add();
let add2=add(5);
let add3=add(20,30);
console.log(add1);
console.log(add2);
console.log(add3);

function total(price,quantity=1)
{
    return price*quantity;
}
let result=total(200);
let result1=total(200,4);
console.log(result);
console.log(result1);







